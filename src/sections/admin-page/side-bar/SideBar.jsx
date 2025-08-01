import { useState } from 'react';
import ProfileForm from '../profile-form/ProfileForm';

export default function SideBar({ handleChangeBoard }) {
    const [currentNav, setCurrentNav] = useState("ProfileForm");

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
            content: "About",
            board: "WhyHireMeForm",
        },
        {
            content: "Marquee",
            board: "MarqueeForm",
        },
        {
            content: "My project",
            board: "MyProjectForm",
        },
        {
            content: "Footer",
            board: "FooterForm",
        },
    ];

    return (
        <aside className="fixed h-[100vh] w-1/5 left-0 bg-[#2C2C2C] border-[#444444] text-white border-r-1 flex flex-col items-center">
            <figure className="  py-10 w-full h-15 shrink-0 flex justify-center items-center border-[#444444] border-b-1">
                <h1 className="text-[30px] font-bold">Admin page</h1>
            </figure>
            <nav className=" h-full grow-1 w-full flex flex-col ">

                {boardList.map((item, index) => <button key={index} className={`text-[16px] text-start px-10 w-full h-16 cursor-pointer hover:bg-white/5 duration-100 ${currentNav == item.board ? 'bg-white/5' : ''}`} onClick={() => { handleChangeBoard(item.board); setCurrentNav(item.board) }}>{item.content}</button>)}

            </nav>
        </aside >
    )
}