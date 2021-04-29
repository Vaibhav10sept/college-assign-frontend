import React, { useEffect, useState } from "react";
import '../Graph/graph.css'
import { PieChart, Pie, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Sector, Cell, ResponsiveContainer } from "recharts";
import axios from "axios";

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
  const [fetcheddata, setfetcheddata] = useState();
  const [fetcheddata2, setfetcheddata2] = useState();


  React.useEffect(() => {

    axios
      .get(`https://college-backend-assignment.herokuapp.com/api/college/countStates`)
      .then((res) => {
        setfetcheddata(res.data);
        console.log("data", fetcheddata);
      })
      .catch((err) => {
        console.log("blog error", err);
      });


    axios
      .get(`https://college-backend-assignment.herokuapp.com/api/college/countCourses`)
      .then((res) => {
        setfetcheddata2(res.data);
        console.log("data", fetcheddata2);
      })
      .catch((err) => {
        console.log("blog error", err);
      });
  }, []);
  return (

    <div class="pie_chart">
      {fetcheddata ? (
        <div className="chartinn">
          <h2>state wise</h2>
          <PieChart width={400} height={400} >
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={fetcheddata}
              cx={150}
              cy={160}
              outerRadius={100}
              fill="#5443c3"
              label
              className="pie1"
            />
            <Tooltip />

          </PieChart>

        </div>) : null}

      {fetcheddata ? (
        <div className="chartinn">
          <h2>course wise</h2>
          <PieChart width={400} height={400} >
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={fetcheddata2}
              cx={150}
              cy={160}
              outerRadius={100}
              fill="#5443c3"
              label
              className="pie1"
            />
            <Tooltip />

          </PieChart>

        </div>) : null}



    </div>
    
  );

}
