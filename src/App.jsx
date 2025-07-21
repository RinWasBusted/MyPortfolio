// import { useState } from "react";
import "./App.css";
import HeroBanner from "./components/HeroBanner/HeroBanner.jsx";
import MyServices from "./components/MyServices/MyServices.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="w-full h-full flex pt-5 flex-col items-center">
      <NavBar></NavBar>
      <HeroBanner></HeroBanner>
      <MyServices></MyServices>
    </div>
  );
}

export default App;
