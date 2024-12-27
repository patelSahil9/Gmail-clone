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
import Mail from './Components/mail';
import Compose from './Components/Compose';
// import Login from './Components/Login';

export default function App() {
  const [showCompose, setShowCompose] = React.useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex pt-2">
          <Sidebar setShowCompose={setShowCompose} showCompose={showCompose}/>
          
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/Inbox" element={<Inbox />} /> 
            <Route path="/Starred" element={<Starred />} />
            <Route path="/Snnozed" element={<Snnozed />} />
            <Route path="/Sent" element={<Sent />} />
            <Route path="/Draft" element={<Draft />} />
            <Route path="/Email/:id" element={<Mail />} />
          </Routes>
          
        </div>
      </BrowserRouter>
      <Compose setShowCompose={setShowCompose} showCompose={showCompose}/>
      {/* <Login/>    */}
    </>
  );
}

//AAAVUU 3 MINITS MAA