"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import Graph from "./Graph"

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("INR")
  const [toCurrency, setToCurrency] = useState("USD")
  const [exchangeRate, setExchangeRate] = useState(0)
  const [historicalData, setHistoricalData] = useState([])
  const [selectedPeriod, setSelectedPeriod] = useState("1M")
  const [currentDateTime, setCurrentDateTime] = useState("")

  useEffect(() => {
    fetchExchangeRate()
    fetchHistoricalData()

    // Set current date and time
    const now = new Date()
    const options = {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    }
    setCurrentDateTime(now.toLocaleDateString("en-US", options))
  }, [fromCurrency, toCurrency])

  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      const rate = response.data.rates[toCurrency]
      setExchangeRate(rate)
    } catch (error) {
      console.error("Error fetching exchange rate:", error)
    }
  }

  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      const rates = Object.entries(response.data.rates)
        .filter(([currency]) => currency === toCurrency)
        .map(([currency, rate]) => ({
          date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
          rate,
        }))

      // Generate some mock historical data since the API doesn't provide it
      const mockHistoricalData = []
      const today = new Date()

      for (let i = 9; i >= 0; i--) {
        const date = new Date(today)
        date.setDate(today.getDate() - i)

        // Add some random variation to create a realistic looking graph
        const randomVariation = 0.9 + Math.random() * 0.2 // Between 0.9 and 1.1
        const historicalRate = rates[0].rate * randomVariation

        mockHistoricalData.push({
          date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
          rate: historicalRate,
        })
      }

      setHistoricalData(mockHistoricalData)
    } catch (error) {
      console.error("Error fetching historical data:", error)
    }
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value)
  }

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121212] text-white px-20 flex flex-col items-center"
    >
      <div className="w-full flex justify-center items-center gap-6">

        <div className="mb-4  w-1/2 p-8">
          <div className="border border-gray-700 rounded-lg overflow-hidden mb-4">
            <div className="flex">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="bg-transparent text-white p-4 text-xl w-1/2 outline-none"
              />
              <div className="relative w-1/2">
                <select
                  value={fromCurrency}
                  onChange={handleFromCurrencyChange}
                  className="appearance-none bg-[#121212] text-white  p-4 text-xl w-full outline-none cursor-pointer"
                >
                  <option value="INR">Indian Rupee</option>
                  <option value="USD">United States Dollar</option>
                  <option value="EUR">Euro</option>
                  <option value="GBP">British Pound</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1L6 5L11 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg overflow-hidden">
            <div className="flex">
              <input
                type="number"
                value={(amount * exchangeRate).toFixed(4)}
                readOnly
                className="bg-transparent text-white p-4 text-xl w-1/2 outline-none"
              />
              <div className="relative w-1/2">
                <select
                  value={toCurrency}
                  onChange={handleToCurrencyChange}
                  className="appearance-none bg-[#121212] text-white p-4 text-xl w-full outline-none cursor-pointer"
                >
                  <option value="USD">United States Dollar</option>
                  <option value="INR">Indian Rupee</option>
                  <option value="EUR">Euro</option>
                  <option value="GBP">British Pound</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1L6 5L11 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-1/2 p-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg text-gray-400">
              {amount} {fromCurrency} equals
            </h1>
            <h2 className="text-5xl font-bold mb-6">
              {(amount * exchangeRate).toFixed(4)} {toCurrency}
            </h2>
          </div>

          <div className="flex justify-between mb-8">
            <div className="flex gap-4">
              {["1D", "5D", "1M", "1Y", "5Y", "Max"].map((period) => (
                <button
                  key={period}
                  className={`px-3 py-1 rounded-full ${selectedPeriod === period ? "bg-gray-700" : "text-gray-400 hover:bg-gray-800"
                    }`}
                  onClick={() => setSelectedPeriod(period)}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="h-48 mb-6">
            <Graph data={historicalData} />
          </div>

          <div className="text-sm text-gray-400 mb-4">
            {currentDateTime} · <span className="cursor-pointer">Disclaimer</span>
          </div>
        </div>

      </div>
    </motion.div >
  )
}

export default CurrencyConverter

