import React from "react";
import EChartsReact from "echarts-for-react";
import PopulationChartWrapper from "./style";

type PopulationData = {
  year: number;
  value: number;
};

const PopulationChart = ({
  populationData,
}: {
  populationData: PopulationData[];
}) => {
  const option = {
    xAxis: {
      type: "category",
      data: populationData.map((value) => value.year),
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (value: number) => {
          if (value >= 1_000_000) {
            return (value / 1_000_000).toFixed(1) + "M"; 
          } else if (value >= 1_000) {
            return (value / 1_000).toFixed(1) + "K"; 
          }
          return value.toString(); 
        },
      },
    },
    series: [
      {
        type: "bar",
        data: populationData.map((population) => population.value),
      },
    ],
  };

  return (
    <PopulationChartWrapper>
      <EChartsReact option={option} />
    </PopulationChartWrapper>
  );
};

export default PopulationChart;
