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

    return (<header className="fixed top-0 w-[100vw] h-14 bg-[#2C2C2C] border-[#444444] text-white border-b-1 flex justify-end items-center px-10" >
        <Link className="h-full flex items-center cursor-pointer border-l-1 border-r-1 border-[#444444] px-5 hover:bg-white/5 duration-100" to={'/'}>
            <h2>Portfolio Page</h2>
        </Link>

        <div className=" h-14 min-w-50 flex gap-3 items-center border-l-1 border-[#444444] pl-5 ">
            <figure className="h-10 w-10 rounded-[50%] overflow-hidden cursor-pointer">
                <img src={avatar} alt="logo" />
            </figure>
            <h2 className=" text-[16px] cursor-pointer">{name}</h2>
        </div>
    </header>)
}