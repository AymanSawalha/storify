import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/sidebar/Sidebar";
import Analysis from "./pages/Analysis/AnalysisPage";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="d-flex">
          <SideBar/>
        <div className="pageinfo">
          <Analysis/>
        </div>
      </div>
    </div>
    );
}
export default App;
