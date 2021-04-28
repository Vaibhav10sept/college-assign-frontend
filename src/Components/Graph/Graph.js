import React from "react";
import '../Graph/graph.css'
import { PieChart, Pie, Legend, Tooltip, Sector, Cell, ResponsiveContainer } from "recharts";
  
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
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  export default function Graph() {
    return (
     <div class="pie_chart">
          <PieChart width={800} height={350} >
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
          data={data01}
          cx={640}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          className="dispnone"
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
        <Tooltip />
      </PieChart>
     </div>
    );
  
}
