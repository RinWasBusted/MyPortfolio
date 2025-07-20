// import { useState } from "react";
import "./App.css";
import HeroBanner from "./components/HeroBanner/HeroBanner.jsx";
// import NavBar from "./components/NavBar/NavBar";
// import SideBar from "./components/SideBar/SideBar.jsx";
// import ProgressBar from "./components/ProgressBar/ProgressBar.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="w-full h-full flex pt-5 flex-col items-center">
      <NavBar></NavBar>
      <HeroBanner></HeroBanner>
    </div>
  );
}

export default App;
