import React from "react";
import '../Graph/graph.css'
import { PieChart, Pie, Legend,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Sector, Cell, ResponsiveContainer } from "recharts";


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];
const data02 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },

];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
export default function Graph() {
  return (
    <div class="pie_chart">
      <PieChart width={900} height={350} >
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          cx={140}
          cy={200}
          outerRadius={100}
          fill="#5443c3"
          label
        />
        <Pie
          data={data02}
          cx={640}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          className="dispnone"
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      ><Tooltip >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        </Tooltip>
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );

}
