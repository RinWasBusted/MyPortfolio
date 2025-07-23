import { useRef } from "react";
import MainLayout from "../layout/MainLayout";

import HeroBanner from "../sections/hero-banner/HeroBanner";
import MyServices from "../sections/my-services/MyServices";
import MyWorkExperience from "../sections/my-work-experience/MyWorkExperience";
import WhyHireMe from "../sections/why-hire-me/WhyHireMe";
import RunningText from "../sections/running-text/RunningText";

function App() {

  const heroRef = useRef();
  const serviceRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();
  const textRef = useRef();

  return (
    <MainLayout
      scrollTargets={{
        heroRef,
        serviceRef,
        experienceRef,
        aboutRef,
        textRef,
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
      <section ref={textRef}>
        <RunningText />
      </section>
    </MainLayout>
  );
}

export default App;
