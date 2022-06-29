import React from "react";
import { Chart } from "react-google-charts";
import { useEffect, useState} from 'react';

export default function App({title,dataR}) {
  const [dataP, setData] = useState(dataR)
  return (
    <Chart
      chartType="PieChart"
      data={[
        ['Likes', "General"],
        ["Reacciones positivas", dataR.likes],
        ["Reacciones negativas", dataR.dislikes],
        
      ]}
      options={{
        title: title,
        is3D: true,
      }}
      width={"100%"}
      height={"500px"}
    />
  );
}