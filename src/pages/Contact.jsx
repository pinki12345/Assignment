import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton, TextField } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import { MdModeEdit } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import CommonModal from "../components/common/CommonModal";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import Stack from "@mui/material/Stack";
import { CiSearch } from "react-icons/ci";
import * as XLSX from "xlsx";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Contact = () => {
  const [data, setData] = useState(null);

  const [openAddUserForm, setOpenAddUserForm] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [filterValue, setFilterValue] = useState("");

  const handleOpen = () => {
    setOpenAddUserForm(true);
  };

  const handleClose = () => {
    setOpenAddUserForm(false);
  };

  const handleUpdateCloseModal = () => {
    setOpenUpdateModal(false);
  };

  const handleAddNewUser = async (userData) => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/createTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const newUser = await response.json();
        setData((prevData) => [...prevData, newUser.data]);
        handleClose();
        console.log("User added successfully");
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditUser = async (id, updatedUserData) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/updateTodo/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        }
      );

      if (response.ok) {
        console.log("User updated successfully");
        handleUpdateCloseModal();
        setData((prevData) => {
          const updatedData = prevData.map((row) =>
            row._id === id ? { ...row, ...updatedUserData } : row
          );
          return updatedData;
        });
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addUserForm = () => {
    return (
      <>
        <AddUser onAddUser={handleAddNewUser} handleClose={handleClose} />
      </>
    );
  };

  const updateModel = (rowData) => {
    setOpenUpdateModal(true);
    setRowData(rowData);
  };
  const UpdateUserForm = (rowData) => {
    return (
      <>
        <UpdateUser
          rowData={rowData}
          handleEditUser={handleEditUser}
          modalClose={handleUpdateCloseModal}
        />
      </>
    );
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/getTodos")
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/deleteTodo/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("User deleted successfully");
        setData((prevData) => prevData.filter((row) => row._id !== id));
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterData = () => {
    if (!filterValue) {
      return data;
    }

    return data.filter((row) => {
      return (
        row.Name.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.Email.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.Phone.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.Designation.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.Industry.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.Country.toLowerCase().includes(filterValue.toLowerCase())
      );
    });
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filterData());
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "table_data.xlsx");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    filterData();
  };

  return (
    <div>
      <Container>
        <div className="flex space-x-80">
          <div>
            <Stack spacing={5} mt={1} direction="row">
              <Button
                variant="contained"
                style={{ backgroundColor: "#4caf50" }}
              >
                Import
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#f44336" }}
                onClick={exportToExcel}
              >
                Export
              </Button>
            </Stack>
          </div>

          <div>
            <Stack mt={1} direction="row">
              <Button variant="contained" onClick={handleOpen}>
                AddUser
              </Button>
            </Stack>
          </div>

          <div className="w-auto h-auto mt-3">
            <form noValidate autoComplete="off" onSubmit={handleSearch}>
              <TextField
                id="search"
                label="Search"
                variant="outlined"
                value={filterValue}
                autoComplete="off"
                onChange={(e) => setFilterValue(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      type="submit"
                      aria-label="search"
                      onClick={() => filterData()}
                    >
                      <CiSearch />
                    </IconButton>
                  ),
                }}
              />
            </form>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Designation</TableCell>
                <TableCell align="right">Industry</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData()?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell align="right">{row.Email}</TableCell>
                  <TableCell align="right">{row.Phone}</TableCell>
                  <TableCell align="right">{row.Designation}</TableCell>
                  <TableCell align="right">{row.Industry}</TableCell>
                  <TableCell align="right">{row.Country}</TableCell>
                  <TableCell align="right">
                    <Stack spacing={2} direction="row">
                      <MdOutlineEdit
                        onClick={() => updateModel(row)}
                        className="editIcon"
                        size={20}
                        color="blue"
                      />
                      <MdDelete
                        onClick={() => deleteUser(row._id)}
                        size={20}
                        color="red"
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <div>
        {openAddUserForm && (
          <CommonModal
            open={openAddUserForm}
            body={addUserForm()}
            onClose={handleClose}
            heading={"Add User"}
          />
        )}

        {openUpdateModal && (
          <CommonModal
            open={openUpdateModal}
            body={<UpdateUserForm rowData={rowData} />}
            heading={"Update User"}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
