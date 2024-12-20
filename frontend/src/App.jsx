import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Inbox from './Components/Inbox';
import Starred from './Components/Starred';
import Snnozed from './Components/Snnozed';
import Sent from './Components/Sent';
import Draft from './Components/Draft';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex pt-2">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/Inbox" element={<Inbox />} />
            <Route path="/Starred" element={<Starred />} />
            <Route path="/Snnozed" element={<Snnozed />} />
            <Route path="/Sent" element={<Sent />} />
            <Route path="/Draft" element={<Draft />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}