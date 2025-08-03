import { useState } from "react";
import avt from '../../../assets/vyvy.jpg'


export default function SideBar({ loggedin }) {
    const [showNavBar, setShowNavBar] = useState(false);

    return (
        <>
            <div className="fixed right-10 top-10 text-white text-[25px] cursor-pointer lg:hidden z-2" onClick={() => setShowNavBar(s => !s)}>
                <i class={`fa-solid ${showNavBar ? "fa-x" : 'fa-bars'} `}></i>
            </div>
            <section className={`duration-200 ${showNavBar ? '' : 'translate-x-[100%]'} lg:hidden bg-[#2B2B2B] w-3/4 sm:w-1/2 h-[100vh] fixed top-0 right-0 flex flex-col gap-20 py-20 px-10`}>
                <section className=" flex-col gap-5 ">
                    <button type="button" className={`${loggedin ? 'hidden' : ''} text-white text-[18px] flex justify-center items-center rounded-[15px] h-15 w-full cursor-pointer hover:bg-white/3 duration-100`}>Sign up</button>
                    <button type="button" className={`${loggedin ? 'hidden' : ''} text-[#333333] text-[18px] flex justify-center items-center bg-[#BFAFF2] rounded-[15px] h-15 w-full  cursor-pointer hover:bg-[#d2c6fb] duration-100`}>Log in</button>

                    <div className={`${loggedin ? '' : 'hidden'} h-full flex w-full gap-3 text-white items-center`}>
                        <figure className=" h-[50px] w-[50px] rounded-[25px] overflow-hidden shadow-2xl shrink-0">
                            <img src={avt} alt="User avatar" className="w-full h-full cursor-pointer" />
                        </figure>

                        <article className="items-center grow-1">
                            <h3 className="font-[600] cursor-pointer">Thai Pham</h3>
                            <p className="opacity-30 text-[12px]">User</p>
                        </article>
                    </div>
                </section>

                <section className="flex flex-col items-center gap-3 text-white">
                    <button className="cursor-pointer h-15 hover:bg-white/5 w-full duration-100 rounded-[5px] hover:font-[500]">Dashboard</button>
                    <button className="cursor-pointer h-15 hover:bg-white/5 w-full duration-100 rounded-[5px] hover:font-[500]">Your portfolio</button>
                    <button className="cursor-pointer h-15 hover:bg-white/5 w-full duration-100 rounded-[5px] hover:font-[500]">About us</button>
                </section>



            </section>
        </>

    )
}