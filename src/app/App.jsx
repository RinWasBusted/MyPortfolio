import { useRef, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";

import HeroBanner from "../sections/portfolio/hero-banner/HeroBanner";
import MyServices from "../sections/portfolio/my-services/MyServices";
import MyWorkExperience from "../sections/portfolio/my-work-experience/MyWorkExperience";
import WhyHireMe from "../sections/portfolio/why-hire-me/WhyHireMe";
import RunningText from "../sections/portfolio/running-text/RunningText";
import MyProject from "../sections/portfolio/my-project/MyProject";
import "./App.css";

import HeroBannerForm from "../sections/admin-page/hero-banner-form/HeroBannerForm";

function App() {
  const [currentLayout, setCurrentLayout] = useState("portfolio");

  function handleChangeLayout(layoutName) {
    setCurrentLayout(layoutName);
  }

  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;

  const heroRef = useRef();
  const serviceRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  return (
    currentLayout == "portfolio" ? <MainLayout
      className="main_layout"
      scrollTargets={{
        heroRef,
        serviceRef,
        experienceRef,
        aboutRef,
        projectRef,
        contactRef,
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

      : <AdminLayout handleChangeLayout={handleChangeLayout}>
        <HeroBannerForm></HeroBannerForm>
      </AdminLayout>




  );
}

export default App;
