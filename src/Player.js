import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5", padding: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Card className="rotating-border" style={{ width: "20rem", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", marginInline: "10px" }}>
          <Card.Img variant="top" src={imageURL} style={{ height: "300px", width: "100%", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ color: "#333", fontWeight: "bold" }}>{name}</Card.Title>
            <Card.Text style={{ color: "#666" }}>Team: {team}</Card.Text>
            <Card.Text style={{ color: "#666" }}>Nationality: {nationality}</Card.Text>
            <Card.Text style={{ color: "#666" }}>Jersey Number: {jerseyNumber}</Card.Text>
            <Card.Text style={{ color: "#666" }}>Age: {age}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Player;

