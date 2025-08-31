import { useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner';
import smoothscroll from "smoothscroll-polyfill";
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import LoginRegisterLayout from "../layout/LoginRegisterLayout";
import LandingLayout from "../layout/LandingLayout";
import NotFound404Layout from "../layout/NotFound404Layout";

import HeroBanner from "../sections/portfolio/hero-banner/HeroBanner";
import MyServices from "../sections/portfolio/my-services/MyServices";
import MyWorkExperience from "../sections/portfolio/my-work-experience/MyWorkExperience";
import WhyHireMe from "../sections/portfolio/why-hire-me/WhyHireMe";
import Marquee from "../sections/portfolio/marquee/Marquee";
import MyProject from "../sections/portfolio/my-project/MyProject";
import "./App.css";

import ProfileForm from "../sections/admin-page/profile-form/ProfileForm";
import HeroBannerForm from "../sections/admin-page/hero-banner-form/HeroBannerForm";
import MyServiceForm from "../sections/admin-page/my-service-form/MyServiceForm";
import MyWorkExperienceForm from "../sections/admin-page/my-work-experience-form/MyWorkExperienceForm";
import WhyHireMeForm from "../sections/admin-page/why-hire-me-form/WhyHireMeForm";
import MyProjectForm from "../sections/admin-page/my-project-form/MyProjectForm";

import LandingHeroBanner from '../sections/landing/hero-banner/HeroBanner';
import Features from "../sections/landing/features/Features";
import SectionPreview from "../sections/landing/section-preview/SectionPreview";

import LoginBoard from "../sections/login-register-page/LoginBoard";
import RegisterBoard from "../sections/login-register-page/RegisterBoard";


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
      element:
        <LandingLayout>
          <section>
            <LandingHeroBanner></LandingHeroBanner>
          </section>

          <section>
            <Features></Features>
          </section>

          <section>
            <SectionPreview></SectionPreview>
          </section>
        </LandingLayout>,
      errorElement: <LandingLayout>
        <section>
          < NotFound404Layout ></NotFound404Layout >
        </section>

      </LandingLayout>,
    },
    {
      path: '/my-portfolio',
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
    },
    {
      path: '/admin',
      element: <AdminLayout></AdminLayout>,
      children: [
        {
          path: 'profile',
          element: <ProfileForm></ProfileForm>
        },
        {
          path: 'hero-banner',
          element: <HeroBannerForm></HeroBannerForm>
        },
        {
          path: 'service',
          element: <MyServiceForm></MyServiceForm>
        },
        {
          path: 'work-experience',
          element: <MyWorkExperienceForm></MyWorkExperienceForm>
        }, {
          path: 'about',
          element: <WhyHireMeForm></WhyHireMeForm>
        },
        {
          path: 'project',
          element: <MyProjectForm></MyProjectForm>
        },
      ]
    },
    {
      path: '/login',
      element: <LoginRegisterLayout>
        <LoginBoard></LoginBoard>
      </LoginRegisterLayout>
    },
    {
      path: '/register',
      element: <LoginRegisterLayout>
        <RegisterBoard></RegisterBoard>
      </LoginRegisterLayout>
    },
  ]);

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={PageRouter}></RouterProvider>
        <Toaster position="top-right" richColors />
      </QueryClientProvider>
    </>
  );
}

export default App;
