import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";

const data = [
  { name: "Total Project", value: 150 },
  { name: "Won", value: 150 },
  { name: "Hold", value: 450 },
  { name: "Project", value: 250 },
];

const COLORS = ["#CCFFCC", "#99FFFF", "#FF99FF", "#FFCCCC"];

const PieChartComponent = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label>
            {" "}
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend align="right" verticalAlign="middle" layout="vertical" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
