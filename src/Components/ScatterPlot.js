import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import echarts from "../echarts";
import { getValue } from "@testing-library/user-event/dist/utils";

const ScatterPlot = ({ wineDataSet }) => {
  //sorting the dataset with respect to Color-Intensity (for horizontal axis)
  const scatterPlotDataset = wineDataSet.sort((a, b) => {
    return a["Color intensity"] - b["Color intensity"];
  });

  //defining scatter plot properties & data
  const scatterPlotChartOptions = {
    title: {
      text: "Color Intensity - vs - Hue",
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
      data: scatterPlotDataset.map((wine) => wine["Color intensity"]),
      name: "Color Intensity",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: "1rem",
        padding: [10, 10, 10, 10],
        fontWeight: "bold",
      },
      axisLabel: {
        // rotate: 90,
      },
    },
    yAxis: {
      name: "Hue",
      type: "value",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: "1rem",
        padding: [10, 10, 10, 10],
        fontWeight: "bold",
      },
    },
    options: {
      chart: {
        type: "scatter",
      },
    },
    series: [
      {
        name: "Hue",
        type: "scatter",
        data: scatterPlotDataset.map((wine) => wine.Hue),
      },
    ],
  };

  return (
    <div className="scatterChart">
      <ReactEChartsCore
        echarts={echarts}
        option={scatterPlotChartOptions}
      />
    </div>
  );
};

export default ScatterPlot;
