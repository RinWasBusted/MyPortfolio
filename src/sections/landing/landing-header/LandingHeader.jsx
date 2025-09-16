import { useState, useEffect, lazy } from "react"
import Logo from '../../../assets/QuickPortfolioLogo.png'
import avt from '../../../assets/vyvy.jpg'
const SideBar = lazy(() => import('./SideBar'))
// import SideBar from "./SideBar";
import { Link } from "react-router-dom";

export default function LandingHeader() {
    const [loggedin, setLoggedin] = useState(false);
    const accessToken = localStorage.getItem('accessToken') || null;

    useEffect(() => {
        if (accessToken) setLoggedin(true);

    }, [accessToken])

    return (
        <header className="w-full h-25 backdrop-blur flex justify-between items-center px-10 fixed gap-10 z-10">
            <figure className="h-1/2 w-20">
                <img src={Logo} alt="Logo" className="h-full " />
            </figure>

            <section className="h-1/2 hidden lg:flex items-center gap-3 text-white">
                <a href={accessToken ? "/admin" : '/login'} target="_blank" className="cursor-pointer h-full hover:bg-white/5 w-30 duration-100 rounded-[5px] hover:font-[500] flex justify-center items-center">Dashboard</a>
                <a href={accessToken ? `/my-portfolio` : '/login'} target="_blank" className="cursor-pointer h-full hover:bg-white/5 w-30 duration-100 rounded-[5px] hover:font-[500] flex justify-center items-center">Your portfolio</a>
                <Link className="cursor-pointer h-full hover:bg-white/5 w-30 duration-100 rounded-[5px] hover:font-[500] flex justify-center items-center">About us</Link>
            </section>

            <section className="h-1/2 hidden lg:flex gap-5 ">
                <Link to={'/register'} className={`${loggedin ? 'hidden' : ''} text-white text-[18px] flex justify-center items-center rounded-[15px] h-full w-45 cursor-pointer hover:bg-white/3 duration-100`}>Sign up</Link>
                <Link to={'/login'} className={`${loggedin ? 'hidden' : ''} text-[#333333] text-[18px] flex justify-center items-center bg-[#BFAFF2] rounded-[15px] h-full w-45 cursor-pointer hover:bg-[#d2c6fb] duration-100`}>Log in</Link>

                <div className={`${loggedin ? '' : 'hidden'} h-full flex gap-3 text-white items-center`}>
                    <Link to={'/admin'} className=" h-[50px] w-[50px] rounded-[25px] overflow-hidden shadow-2xl">
                        <img src={avt} alt="User avatar" className="w-full h-full cursor-pointer" />
                    </Link>

                    <article className="min-w-40 items-center">
                        <Link to={'/admin'}><h3 className="font-[600] cursor-pointer">Thai Pham</h3></Link>
                        <p className="opacity-30 text-[12px]">User</p>
                    </article>
                </div>
            </section>



            <SideBar loggedin={loggedin}></SideBar>
        </header >
    )
}