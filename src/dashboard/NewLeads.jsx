import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Karthik Kumar", "Inbound Referal"),
  createData("Abin Binny", "Inbound Ad Compaign"),
  createData("Abin Binny", "Outbound calls"),
  createData("Abin Binny", "Outbound Email"),
  createData("Abin Binny", "Outbound Email"),
  createData("Abin Binny", "Inbound Ad Compaign"),
  createData("Abin Binny", "Outbound Email"),
  createData("Abin Binny", "Inbound Referal"),
  createData("Abin Binny", "Outbound Email"),
];
const NewLeads = () => {
  return (
    <>
      <h3>New Leads</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>New Appointment</TableCell>
              <TableCell align="right">Mode of Lead</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NewLeads;
