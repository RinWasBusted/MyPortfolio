import { useState, useEffect } from 'react';
import ProfileForm from '../profile-form/ProfileForm';

export default function SideBar({ handleChangeBoard }) {
    const [currentNav, setCurrentNav] = useState("ProfileForm");
    const [showSideBar, setShowSideBar] = useState(false);

    const boardList = [
        {
            content: "Profile",
            board: "ProfileForm",
        },
        {
            content: "Hero banner",
            board: "HeroBannerForm",
        },
        {
            content: "My service",
            board: "MyServiceForm",
        },
        {
            content: "My work experience",
            board: "MyWorkExperienceForm",
        },
        {
            content: "Why hire me",
            board: "WhyHireMeForm",
        },
        // {
        //     content: "Marquee",
        //     board: "MarqueeForm",
        // },
        {
            content: "My project",
            board: "MyProjectForm",
        },
        // {
        //     content: "Footer",
        //     board: "FooterForm",
        // },
    ];

    useEffect(() => {
        const closeSideBar = () => setShowSideBar(false);
        window.addEventListener('resize', closeSideBar);

        return () => window.removeEventListener('resize', closeSideBar);
    }, [])

    useEffect(() => {
        setShowSideBar(false);
    }, [currentNav]);

    return (
        <>
            <button
                className="lg:!hidden fixed z-2 left-5 top-3 cursor-pointer hover:opacity-80 shrink-0"
                onClick={() => setShowSideBar((s) => !s)}
            >
                <i className={`fa-solid ${showSideBar ? "fa-xmark" : "fa-bars"} text-[30px]`}></i>
            </button>

            <aside className={`${showSideBar ? 'translate-x-0' : 'translate-x-[-150%]'} duration-200 lg:translate-0 top-0 fixed h-[100vh] w-50 lg:w-1/5 left-0 bg-[#2C2C2C] border-[#444444] text-white border-r-1 flex flex-col items-center`}>


                <figure className="  py-10 w-full h-15 shrink-0 opacity-0 lg:opacity-100 flex justify-center items-center border-[#444444] border-b-1">
                    <h1 className="text-[30px] font-bold">Admin page</h1>
                </figure>
                <nav className=" h-full grow-1 w-full flex flex-col ">

                    {boardList.map((item, index) => <button key={index} className={`text-[16px] text-start px-10 w-full h-16 cursor-pointer hover:bg-white/5 duration-100 ${currentNav == item.board ? 'bg-white/5' : ''}`} onClick={() => { handleChangeBoard(item.board); setCurrentNav(item.board) }}>{item.content}</button>)}

                </nav>
            </aside >
        </>

    )
}