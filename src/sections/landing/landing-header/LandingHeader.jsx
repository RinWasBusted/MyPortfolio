import { useState } from "react"
import avt from '../../../assets/vyvy.jpg'
import SideBar from "./SideBar";

export default function LandingHeader() {
    const [loggedin, setLoggedin] = useState(false);

    return (
        <header className="w-full h-25 bg-[#2B2B2B] flex justify-between items-center px-10 relative gap-10">
            <figure className="bg-amber-200 h-1/2 w-20">
                <img src="" alt="Logo" />
            </figure>

            <section className="h-1/2 hidden lg:flex items-center gap-3 text-white">
                <button className="cursor-pointer h-full hover:bg-white/5 w-30 duration-100 rounded-[5px] hover:font-[500]">Dashboard</button>
                <button className="cursor-pointer h-full hover:bg-white/5 w-30 duration-100 rounded-[5px] hover:font-[500]">Your portfolio</button>
                <button className="cursor-pointer h-full hover:bg-white/5 w-30 duration-100 rounded-[5px] hover:font-[500]">About us</button>
            </section>

            <section className="h-1/2 hidden lg:flex gap-5 ">
                <button type="button" className={`${loggedin ? 'hidden' : ''} text-white text-[18px] flex justify-center items-center rounded-[15px] h-full w-45 cursor-pointer hover:bg-white/3 duration-100`}>Sign up</button>
                <button type="button" className={`${loggedin ? 'hidden' : ''} text-[#333333] text-[18px] flex justify-center items-center bg-[#BFAFF2] rounded-[15px] h-full w-45 cursor-pointer hover:bg-[#d2c6fb] duration-100`}>Log in</button>

                <div className={`${loggedin ? '' : 'hidden'} h-full flex gap-3 text-white items-center`}>
                    <figure className=" h-[50px] w-[50px] rounded-[25px] overflow-hidden shadow-2xl">
                        <img src={avt} alt="User avatar" className="w-full h-full cursor-pointer" />
                    </figure>

                    <article className="min-w-40 items-center">
                        <h3 className="font-[600] cursor-pointer">Thai Pham</h3>
                        <p className="opacity-30 text-[12px]">User</p>
                    </article>
                </div>
            </section>



            <SideBar loggedin={loggedin}></SideBar>
        </header >
    )
}