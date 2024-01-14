import React from "react";
import CardSection from "./CardSection";
import PieChartComponent from "./PieChartComponent";
import DailyActivites from "./DailyActivites";
import NewLeads from "./NewLeads";
import Grid from "@mui/material/Grid";
import AllExpences from "./AllExpences";
import ChartPage from "./ChartPage";
import { Card, Paper } from "@mui/material";

const DashoardContainer = () => {
  return (
    <>
      <Grid container spacing={1} mt={1}>
        <Grid xs={4}>
          <Paper
            style={{ padding: 16, border: "1px solid #e0e0e0", margin: "8px" }}
          >
            <CardSection />
          </Paper>
        </Grid>
        <Grid xs={8}>
          <Paper
            style={{ padding: 10, border: "1px solid #e0e0e0", margin: "8px" }}
          >
            <ChartPage />
          </Paper>
        </Grid>
        <Grid xs={4} mt={3}>
          <Paper
            style={{ padding: 10, border: "1px solid #e0e0e0", margin: "8px" }}
          >
            <AllExpences />
          </Paper>
          <Paper
            style={{ padding: 10, border: "1px solid #e0e0e0", margin: "8px" }}
          >
            <PieChartComponent />
          </Paper>
        </Grid>
        <Grid container xs={8} mt={3}>
          <Grid xs={6}>
            <Paper
              style={{
                padding: 10,
                border: "1px solid #e0e0e0",
                margin: "8px",
              }}
            >
              <DailyActivites />
            </Paper>
          </Grid>
          <Grid xs={6}>
            <Paper
              style={{
                padding: 10,
                border: "1px solid #e0e0e0",
                margin: "8px",
              }}
            >
              <NewLeads />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DashoardContainer;
