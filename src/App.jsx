// import { useState } from "react";
import "./App.css";
import HeroBanner from "./components/HeroBanner/HeroBanner.jsx";
import MyServices from "./components/MyServices/MyServices.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import MyWorkExperience from "./components/MyWorkExperience/MyWorkExperience.jsx";
import WhyHireMe from "./components/WhyHireMe/WhyHireMe.jsx";
import RunningText from "./components/RunningText/RunningText.jsx";
import MyProjects from "./components/MyProjects/MyProjects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Test from "./Test.jsx";

function App() {
  return (
    <div className="w-full h-full flex pt-5 flex-col items-center">
      <NavBar></NavBar>
      <HeroBanner></HeroBanner>
      <MyServices></MyServices>
      <MyWorkExperience></MyWorkExperience>
      <WhyHireMe></WhyHireMe>
      <RunningText></RunningText>
      <MyProjects></MyProjects>
      <Footer></Footer>
    </div>
  );
}

export default App;
