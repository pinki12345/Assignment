
import React, { useState } from "react";
import { Button, Modal, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

const CommonModal = (props) => {
  const { open, onClose, body,heading } = props;

  

  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          padding: "16px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {heading}
        </Typography>
        <div>{body}</div>
      </div>
    </Modal>
  );
};

export default CommonModal;
