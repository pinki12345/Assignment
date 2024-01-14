import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";



function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Karthik Kumar", <MdMailOutline/>),
  createData("Abin Binny", <FaPhoneAlt/>),
  createData("Abin Binny", <MdMailOutline/>),
  createData("Abin Binny", <MdMailOutline/>),
  createData("Abin Binny", <FaPhoneAlt />),
  createData("Abin Binny", <FaPhoneAlt />),
  createData("Abin Binny", <MdMailOutline />),
  createData("Abin Binny", <FaPhoneAlt />),
  createData("Abin Binny", <MdMailOutline />),
];

const DailyActivites = () => {
  return (
    <>
    <h3>Followup Daily Activity</h3>
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Action</TableCell>
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

export default DailyActivites;