import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Slidebar from "./Components/Slidebar";
import Inbox from "./Components/Inbox";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Slidebar />
        <Inbox />
      </div>
    </>
  );
}
