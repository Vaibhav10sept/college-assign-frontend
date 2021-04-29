import React, { useEffect, useState } from "react";
import '../Graph/graph.css'
import { PieChart, Pie, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Sector, Cell, ResponsiveContainer } from "recharts";
import axios from "axios";

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
