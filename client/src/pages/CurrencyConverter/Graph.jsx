import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

const Graph = ({ data, darkMode = true }) => {
  // Format data for the chart
  const formattedData = data.map((item, index) => ({
    date: item.date || `Day ${index + 1}`,
    rate: typeof item.rate === "number" ? item.rate : Number.parseFloat(item.rate),
  }))

  // Custom tooltip styling
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-700 p-2 rounded shadow-lg text-white text-xs">
          <p>{`${label}`}</p>
          <p className="font-semibold">{`Rate: ${payload[0].value.toFixed(5)}`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
            vertical={false}
          />
          <XAxis
            dataKey="date"
            tick={{ fill: darkMode ? "#9ca3af" : "#6b7280" }}
            axisLine={{ stroke: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
            tickLine={false}
            dy={10}
            fontSize={10}
          />
          <YAxis
            tick={{ fill: darkMode ? "#9ca3af" : "#6b7280" }}
            axisLine={{ stroke: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
            tickLine={false}
            dx={-10}
            fontSize={10}
            domain={["auto", "auto"]}
            tickFormatter={(value) => value.toFixed(5)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="rate"
            stroke={darkMode ? "#60a5fa" : "#4F46E5"}
            strokeWidth={2}
            dot={{
              stroke: darkMode ? "#60a5fa" : "#4F46E5",
              strokeWidth: 2,
              r: 3,
              fill: darkMode ? "#121212" : "#fff",
            }}
            activeDot={{
              r: 5,
              stroke: darkMode ? "#60a5fa" : "#4F46E5",
              strokeWidth: 2,
              fill: darkMode ? "#fff" : "#4F46E5",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph

