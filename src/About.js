import React from "react";
import "./App.css";
const members = ["VICTOR", "LABAKE", "EMMA", "BIOLA", "ANGIE"];
export function About(props) {
  return (
    <div className="App">
      <h1>About ESSL</h1>
      {members.map((value, index) => (
        <p className="p">{value}</p>
      ))}
    </div>
  );
}
