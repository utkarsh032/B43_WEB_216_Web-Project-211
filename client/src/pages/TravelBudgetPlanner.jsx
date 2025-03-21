import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const categories = ['Accommodation', 'Food', 'Activities', 'Transportation', 'Miscellaneous'];

// Colors for the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

function TravelBudgetPlanner() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    date: '',
    description: '',
    amount: '',
    category: categories[0], // Default category
  });
  const [editingIndex, setEditingIndex] = useState(null); // Track which expense is being edited

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  // Add or update an expense
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      // Update existing expense
      const updatedExpenses = [...expenses];
      updatedExpenses[editingIndex] = newExpense;
      setExpenses(updatedExpenses);
      setEditingIndex(null);
    } else {
      // Add new expense
      setExpenses([...expenses, newExpense]);
    }

    // Reset the form
    setNewExpense({ date: '', description: '', amount: '', category: categories[0] });
  };

  // Edit an expense
  const handleEdit = (index) => {
    setNewExpense(expenses[index]);
    setEditingIndex(index);
  };

  // Delete an expense
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  // Calculate total expenses by category for the graph
  const getExpensesByCategory = () => {
    const categoryTotals = categories.map((category) => ({
      category,
      total: expenses
        .filter((expense) => expense.category === category)
        .reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0),
    }));
    return categoryTotals;
  };

  const categoryData = getExpensesByCategory();

  return (
    <div className="min-h-screen p-6">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-evenly">
          {/* Expense Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-8 w-1/3">
            <h1 className="text-2xl font-bold mb-6 text-center">Travel Budget Planner</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newExpense.date}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  value={newExpense.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <input
                type="text"
                name="description"
                value={newExpense.description}
                onChange={handleInputChange}
                placeholder="Enter description"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                type="number"
                name="amount"
                value={newExpense.amount}
                onChange={handleInputChange}
                placeholder="Enter amount"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {editingIndex !== null ? 'Update Expense' : 'Add Expense'}
            </button>
          </form>

          {/* Expense Graph */}
          <div className="mt-8 w-1/3">
            <h2 className="text-xl font-bold mb-4">Expense Breakdown by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip
                  content={({ payload }) => {
                    if (payload && payload.length > 0) {
                      return (
                        <div className="bg-white p-2 border rounded shadow">
                          <p className="font-semibold">{payload[0].payload.category}</p>
                          <p>Total: ${payload[0].payload.total.toFixed(2)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                <Bar dataKey="total" fill="#3b82f6" name="Total Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="mt-8 w-1/3">
            <h2 className="text-xl font-bold mb-4">Expense Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="total"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ payload }) => {
                    if (payload && payload.length > 0) {
                      return (
                        <div className="bg-white p-2 border rounded shadow">
                          <p className="font-semibold">{payload[0].payload.category}</p>
                          <p>Total: ${payload[0].payload.total.toFixed(2)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense List */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-center">{expense.date}</td>
                  <td className="px-4 py-2">{expense.description}</td>
                  <td className="px-4 py-2 text-center">{expense.category}</td>
                  <td className="px-4 py-2 text-center">${expense.amount}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 hover:text-blue-800 mr-2"
                    >
                      <FaRegEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MdDeleteOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TravelBudgetPlanner;