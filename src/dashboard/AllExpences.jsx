import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Shopping", value: 400 },
  { name: "Workspace", value: 300 },
  { name: "Platform", value: 200 },
  { name: "Entertainment", value: 100 },
];

const COLORS = ["#00B3FF", "#3B3F48", "#76D9DF", "#AFAFAF"];

const ExpenseItem = ({ type, amount }) => {
  return (
    <div className="expense-item">
      <div className="grid-item">
        <span className="expensesText">{type}</span>
        <div className="amountValue">{amount}</div>
      </div>
    </div>
  );
};

const AllExpences = () => {
  return (
    <React.Fragment>
      <div className="AllExpences">
        <div className="piechart-commom-box">
          <div className="pichart-ring">
            <PieChart width={400} height={228}>
              <Pie
                data={data}
                cx={130}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"               
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend align="right"  verticalAlign="middle" layout="vertical" />
            </PieChart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllExpences;
