import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";

const UpdateUser = (props) => {
  const { rowData, handleEditUser, modalClose } = props;

  const [formValues, setFormValues] = useState({
    _id: rowData?.rowData._id || "",
    Name: rowData?.rowData.Name || "",
    Email: rowData?.rowData.Email || "",
    Phone: rowData?.rowData.Phone || "",
    Designation: rowData?.rowData.Designation || "",
    Country: rowData?.rowData.Country || "",
    Industry: rowData?.rowData.Industry || "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  const updateUserData = (event) => {
    event.preventDefault();
    handleEditUser(formValues?._id, formValues);
  };

  return (
    <form onSubmit={updateUserData}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            type="text"
            value={formValues.Name}
            name="Name"
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            value={formValues.Email}
            name="Email"
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="mobile"
            type="text"
            value={formValues.Phone}
            name="Phone"
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Designation"
            type="text"
            value={formValues.Designation}
            name="Designation"
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Country"
            type="text"
            value={formValues.Country}
            name="Country"
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Industry"
            type="text"
            value={formValues.Industry}
            name="Industry"
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "16px",
            }}
          >
            <Button
              style={{ marginRight: "8px" }}
              color="error"
              onClick={modalClose}
            >
              Cancel
            </Button>
            <Button variant="contained" type="" color="primary">
              Update
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default UpdateUser;
