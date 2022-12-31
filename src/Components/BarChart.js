import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import echarts from "../echarts";

const BarChart = ({ wineDataSet }) => {
  //converting the dataset into an Object with Category as key and corresponding Malic-acid contents array as value
  const barGraphDataset = wineDataSet.reduce((acc, wine) => {
    acc[wine.Alcohol]
      ? acc[wine.Alcohol].push(wine["Malic Acid"])
      : (acc[wine.Alcohol] = [wine["Malic Acid"]]);
    return acc;
  }, {});

  //defining bar chart properties & data
  const barChartOptions = {
    title: {
      text: "Alcohol - vs - Average Malic Acid",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "20rem",
      right: "5rem",
      bottom: "20rem",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: Object.keys(barGraphDataset), // Alcohol category on x-axis
      name: "Alcohol Category",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: "1rem",
        padding: [10, 10, 10, 10],
        fontWeight: "bold",
      },
    },
    yAxis: {
      name: "Average Malic Acid",
      type: "value",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: "1rem",
        padding: [10, 10, 10, 10],
        fontWeight: "bold",
      },
    },
    series: [
      {
        name: "Avg Malic Acid content",
        type: "bar",

        //averaging the Malic Acid content per category

        data: Object.values(barGraphDataset).map((arr) => {
          return Number(
            (arr.reduce((acc, val) => acc + val, 0) / arr.length).toFixed(2)
            // since, Average = Total sum / Count
          );
        }),
      },
    ],
  };

  return (
    <div className="barChart">
      <ReactEChartsCore
        echarts={echarts}
        option={barChartOptions}
      />
    </div>
  );
};

export default BarChart;
