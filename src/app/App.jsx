import { useRef } from "react";
import MainLayout from "../layout/MainLayout";

import HeroBanner from "../sections/hero-banner/HeroBanner";
import MyServices from "../sections/my-services/MyServices";
import MyWorkExperience from "../sections/my-work-experience/MyWorkExperience";
import WhyHireMe from "../sections/why-hire-me/WhyHireMe";
import RunningText from "../sections/running-text/RunningText";
import MyProject from "../sections/my-project/MyProject";
import "./App.css";

function App() {
  const heroRef = useRef();
  const serviceRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();

  return (
    <MainLayout
      className="main_layout"
      scrollTargets={{
        heroRef,
        serviceRef,
        experienceRef,
        aboutRef,
        projectRef,
      }}
    >
      <section ref={heroRef}>
        <HeroBanner />
      </section>
      <section ref={serviceRef}>
        <MyServices />
      </section>
      <section ref={experienceRef}>
        <MyWorkExperience />
      </section>
      <section ref={aboutRef}>
        <WhyHireMe />
      </section>
      <section>
        <RunningText />
      </section>
      <section ref={projectRef}>
        <MyProject></MyProject>
      </section>
    </MainLayout>
  );
}

export default App;
