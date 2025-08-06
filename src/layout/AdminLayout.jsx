import { useState, useEffect } from 'react';
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

export default function AdminLayout() {
    const [currentBoard, setCurrentBoard] = useState();
    let loggedin = localStorage.getItem('loggedin') || false;
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentBoard(<ProfileForm></ProfileForm>);
        if (!loggedin) navigate('/login')
    }, [navigate, loggedin]);

    function handleChangeBoard(board) {
        switch (board) {
            case 'ProfileForm': setCurrentBoard(<ProfileForm></ProfileForm>); break;

            case 'HeroBannerForm': setCurrentBoard(<HeroBannerForm></HeroBannerForm>); break;

            case 'MyServiceForm': setCurrentBoard(<MyServiceForm></MyServiceForm>); break;

            case 'MyWorkExperienceForm': setCurrentBoard(<MyWorkExperienceForm></MyWorkExperienceForm>); break;

            case 'WhyHireMeForm': setCurrentBoard(<WhyHireMeForm></WhyHireMeForm>); break;

            // case 'MarqueeForm': setCurrentBoard(<MarqueeForm></MarqueeForm>); break;

            case 'MyProjectForm': setCurrentBoard(<MyProjectForm></MyProjectForm>); break;
        };
    };

    return <div className="w-full min-h-[100vh] mt-14 flex flex-wrap bg-[#F5F7FA] text-white justify-end ">
        <Header ></Header>
        <SideBar handleChangeBoard={handleChangeBoard}></SideBar>
        <main className="h-full w-full lg:w-4/5 bg-[#F5F7FA] py-10 px-10 sm:px-20 lg:py-20 lg:px-40 text-[#343C6A]">
            {currentBoard}
        </main>
    </div>;
}
