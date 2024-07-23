import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Graph.module.css";

// HOOK state created to store the data from the API
// here we used the useEffect to get
//the daily data and set the previous stored data with the new one

const Graph = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  });

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "black",

            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "white",

            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Graph;
