import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";

const AddUser = (props) => {
  const { onAddUser, handleClose } = props;

  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Designation: "",
    Country: "",
    Industry: "",
  });

  function handleChange(event) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function createUsers(event) {
    event.preventDefault();
    onAddUser(user);
  }

  return (
    <form onSubmit={createUsers}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            type="text"
            name="Name"
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="Email"
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            type="text"
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
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Save
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddUser;
