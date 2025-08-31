import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
    const [currentNav, setCurrentNav] = useState("ProfileForm");
    const [showSideBar, setShowSideBar] = useState(false);
    const navigator = useNavigate()

    const boardList = [
        {
            content: "Profile",
            board: "profile",
        },
        {
            content: "Hero banner",
            board: "hero-banner",
        },
        {
            content: "My service",
            board: "service",
        },
        {
            content: "My work experience",
            board: "work-experience",
        },
        {
            content: "Why hire me",
            board: "about",
        },
        // {
        //     content: "Marquee",
        //     board: "MarqueeForm",
        // },
        {
            content: "My project",
            board: "project",
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
                className="lg:!hidden fixed z-2 left-5 top-3 cursor-pointer hover:opacity-80 shrink-0 text-black"
                onClick={() => setShowSideBar((s) => !s)}
            >
                <i className={`fa-solid ${showSideBar ? "fa-xmark" : "fa-bars"} text-[30px]`}></i>
            </button>

            <aside className={`${showSideBar ? 'translate-x-0' : 'translate-x-[-150%]'} duration-200 lg:translate-0 top-0 fixed h-[100vh] w-50 lg:w-1/5 left-0 bg-white border-[#F5F7FA] border-r-1 flex flex-col items-center text-[#B1B1B1]`}>


                <figure className="  py-10 w-full h-15 shrink-0 opacity-0 lg:opacity-100 flex justify-center items-center ">
                    <h1 className="text-[30px] text-[#343C6A] font-bold">Dashboard</h1>
                </figure>
                <nav className=" h-full grow-1 w-full flex flex-col ">

                    {boardList.map((item, index) => <button key={index} className={`text-[18px] text-start px-10 w-full h-16 cursor-pointer hover:text-[#2D60FF] after:absolute relative after:left-0 after:bg-[#2D60FF] after:h-full after:w-2 after:rounded-r-[4px] after:scale-x-0 hover:after:scale-x-100 after:duration-100 after:origin-left after:top-0 duration-100 hover:text-[20px] ${currentNav == item.board ? 'text-[#2D60FF]' : ''}`} onClick={() => { navigator(`/admin/${item.board}`); setCurrentNav(item.board) }}>{item.content}</button>)}

                </nav>
            </aside >
        </>

    )
}