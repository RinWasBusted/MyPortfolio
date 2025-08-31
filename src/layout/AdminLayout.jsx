import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../sections/admin-page/header/Header.jsx"
import SideBar from "../sections/admin-page/side-bar/SideBar";
import ProfileForm from "../sections/admin-page/profile-form/ProfileForm.jsx";
import HeroBannerForm from "../sections/admin-page/hero-banner-form/HeroBannerForm.jsx";
import MyServiceForm from '../sections/admin-page/my-service-form/MyServiceForm.jsx';
import MyWorkExperienceForm from '../sections/admin-page/my-work-experience-form/MyWorkExperienceForm.jsx';
import WhyHireMeForm from '../sections/admin-page/why-hire-me-form/WhyHireMeForm.jsx';
import MarqueeForm from '../sections/admin-page/marquee-form/MarqueeForm.jsx';
import MyProjectForm from '../sections/admin-page/my-project-form/MyProjectForm.jsx';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
    const accessToken = localStorage.getItem('accessToken') || false;
    const navigate = useNavigate();


    useEffect(() => {
        if (!accessToken) navigate('/login');

    }, [navigate, accessToken]);

    return <div className="w-full min-h-[100vh] mt-14 flex flex-wrap bg-[#F5F7FA] text-white justify-end ">
        <Header ></Header>
        <SideBar ></SideBar>
        <main className="h-full w-full lg:w-4/5 bg-[#F5F7FA] py-10 px-10 sm:px-20 lg:py-20 lg:px-40 text-[#343C6A]">
            <Outlet></Outlet>
        </main>
    </div>;
}
