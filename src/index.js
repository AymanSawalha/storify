import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/sidebar/Sidebar";
import './index.css';
import Analysis from "./Pages/Analysis/Analysis";
import Home from "./Pages/DashboardHome/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
        <div className="d-flex">
          <SideBar/>
          <div className="pageinfo">
            <Routes>            
              <Route path="/" index element={<Home/>} />
              <Route path="/dashboard" index element={<Home/>} />
              <Route path="/analysis" element={<Analysis/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  </StrictMode>
);
