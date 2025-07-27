import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../sections/admin-page/header/Header.jsx"
import SideBar from "../sections/admin-page/side-bar/SideBar";
import HeroBannerForm from "../sections/admin-page/hero-banner-form/HeroBannerForm.jsx";

export default function AdminLayout() {
    const [currentBoard, setCurrentBoard] = useState('');
    let loggedin = localStorage.getItem('loggedin') || false;
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentBoard('HeroBannerForm');
        if (!loggedin) navigate('/admin/login')
    }, []);

    function handleChangeBoard(board) {
        setCurrentBoard(board);
    };

    return <div className="w-full h-[100vh] flex flex-col items-end  bg-[#2C2C2C] text-white">
        <Header ></Header>
        <SideBar handleChangeBoard={handleChangeBoard}></SideBar>
        <main className="h-full w-[80vw]">
            {currentBoard == "HeroBannerForm" && <HeroBannerForm></HeroBannerForm>}
        </main>
    </div>;
}
