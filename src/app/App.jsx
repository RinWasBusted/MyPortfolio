import { useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import LoginBoard from '../sections/admin-page/login-board/LoginBoard'

import HeroBanner from "../sections/portfolio/hero-banner/HeroBanner";
import MyServices from "../sections/portfolio/my-services/MyServices";
import MyWorkExperience from "../sections/portfolio/my-work-experience/MyWorkExperience";
import WhyHireMe from "../sections/portfolio/why-hire-me/WhyHireMe";
import Marquee from "../sections/portfolio/marquee/Marquee";
import MyProject from "../sections/portfolio/my-project/MyProject";
import "./App.css";


function App() {

  // ~~~~~~~~~~~~~~~~~~SMOOTH SCROLL~~~~~~~~~~~~~~~~~~~~~~~~~
  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;

  // ~~~~~~~~~~~~~~~~~~~~REFS~~~~~~~~~~~~~~~~~~~~~~~~~~
  const heroRef = useRef();
  const serviceRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  // ~~~~~~~~~~~~~~~~~~~~ROUTER CONFIG~~~~~~~~~~~~~~~~~~~~~~~~~~
  const PageRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout
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
          <Marquee />
        </section>
        <section ref={projectRef}>
          <MyProject></MyProject>
        </section>
      </MainLayout>,
      errorElement: <div className="text-[100px] text-red-400">Not Found 404</div>,
    },
    {
      path: '/admin',
      element: <AdminLayout></AdminLayout>,
    },
    {
      path: '/admin/login',
      element: <LoginBoard></LoginBoard>
    }
  ]);


  return (
    <RouterProvider router={PageRouter}></RouterProvider>
  );
}

export default App;
