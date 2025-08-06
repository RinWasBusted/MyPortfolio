import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';

export default function Header() {
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('profile-data'));
        setName(data.name || 'User');
        setAvatar(data.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOiucaQ4hyFBX9H_gsiYQVAt5hcB8peZHWBmI04y3sIFY4SSet5I7MLfRjYwRscGatF4&usqp=CAU");
    }, [])

    return (<header className="fixed top-0 w-[100vw] h-14 bg-white  text-[#343C6A] flex justify-end items-center px-10 gap-5 shadow-lg">
        <a className="rounded-[5px] h-full flex items-center cursor-pointer px-5 hover:scale-110 duration-100" href='/my-portfolio' target="_blank" >
            <h2>Portfolio Page</h2>
        </a>

        <div className="hidden h-full min-w-50 sm:flex gap-3 items-center px-5 inset-shadow-sm  rounded-[5px]">
            <figure className="h-8 w-8 rounded-[50%] overflow-hidden cursor-pointer">
                <img src={avatar} alt="logo" />
            </figure>
            <h2 className=" text-[16px] cursor-pointer">{name}</h2>
        </div>
    </header >)
}