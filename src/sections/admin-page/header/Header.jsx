import { Link } from "react-router-dom"

export default function Header() {
    return (<header className="w-full h-14 bg-[#2C2C2C] border-[#444444] text-white border-b-1 flex justify-end items-center px-10" >
        <Link className="h-full flex items-center cursor-pointer border-l-1 border-r-1 border-[#444444] px-5" to={'/'}>
            <h2>Portfolio Page</h2>
        </Link>

        <div className=" h-14 min-w-50 flex gap-3 items-center border-l-1 border-[#444444] pl-5 ">
            <figure className="h-10 w-10 rounded-[50%] overflow-hidden cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOiucaQ4hyFBX9H_gsiYQVAt5hcB8peZHWBmI04y3sIFY4SSet5I7MLfRjYwRscGatF4&usqp=CAU" alt="logo" />
            </figure>
            <h2 className=" text-[16px] cursor-pointer">Pham Hoang Thai</h2>
        </div>
    </header>)
}