import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IoIosContact } from "react-icons/io";
import { FaIndustry } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const CardSection = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 16,
      }}
    >

      <Card
        style={{
          backgroundColor: "#c095e3",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "15%",
          }}
        >
          <div style={{ marginBottom: 5, display: "flex" }}>
            <IoIosContact
              size={20}
              style={{ color: "black", marginRight: 6 }}
            />
            <Typography
              variant="h6"
              style={{ color: "black", textAlign: "center", marginBottom: 3 }}
            >
              Contacts
            </Typography>
          </div>
          <Typography
            variant="body1"
            style={{
              color: "black",
              textAlign: "start",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            100
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "black", textAlign: "start", margin: 0 }}
          >
            Last Update
          </Typography>
        </CardContent>
      </Card>

      <Card
        style={{
          backgroundColor: "#ffa07a",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "15%",
          }}
        >
          <div style={{ marginBottom: 5, display: "flex" }}>
            <FaIndustry 
              size={20}
              style={{ color: "black", marginRight: 6 }}
            />
            <Typography
              variant="h6"
              style={{ color: "black", textAlign: "center", marginBottom: 3 }}
            >
              Industry
            </Typography>
          </div>
          <Typography
            variant="body1"
            style={{
              color: "black",
              textAlign: "start",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            09
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "black", textAlign: "start", margin: 0 }}
          >
            Last Update
          </Typography>
        </CardContent>
      </Card>

      <Card
        style={{
          backgroundColor: "#90ee90",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "15%",
          }}
        >
          <div style={{ marginBottom: 5, display: "flex" }}>
            <FaFlag
              size={20}
              style={{ color: "black", marginRight: 6 }}
            />
            <Typography
              variant="h6"
              style={{ color: "black", textAlign: "center", marginBottom: 3 }}
            >
              Country
            </Typography>
          </div>
          <Typography
            variant="body1"
            style={{
              color: "black",
              textAlign: "start",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            10
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "black", textAlign: "start", margin: 0 }}
          >
            Last Update
          </Typography>
        </CardContent>
      </Card>

      <Card
        style={{
          backgroundColor: "#87CEFA",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          textWrap: "nowrap"
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "15%",
          }}
        >
          <div style={{ marginBottom: 5, display: "flex" }}>
            <FaPhoneAlt
              size={20}
              style={{ color: "black", marginRight: 6 }}
            />
            <Typography
              variant="h6"
              style={{ color: "black", textAlign: "center", marginBottom: 3 }}
            >
              Phone Number
            </Typography>
          </div>
          <Typography
            variant="body1"
            style={{
              color: "black",
              textAlign: "start",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            100
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "black", textAlign: "start", margin: 0 }}
          >
            Last Update
          </Typography>
        </CardContent>
      </Card>

     
    </div>
  );
};

export default CardSection;
