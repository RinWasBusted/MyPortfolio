import { useState } from 'react';

export default function LoginBoard() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberUser, setRememberUser] = useState(false);


    return (
        <section className="w-full h-full flex justify-center items-center">
            <div className="bg-[#505050] w-120 h-100 rounded-2xl flex flex-col items-center p-10 px-20 gap-10">
                <h2 className="text-[30px] font-[600]">Admin login</h2>
                <form action="submit" className="w-full flex-1 flex flex-col gap-5">
                    <label htmlFor="">Username
                        <input type="text" className="bg-white w-full h-10 rounded-[5px] text-black px-3 outline-none border-2" />
                    </label>

                    <label htmlFor="" className="relative">Password
                        <input type={showPassword ? "text" : "password"} className="bg-white w-full h-10 rounded-[5px] text-black px-3 outline-none border-2" />
                        <div className="absolute cursor-pointer right-[-15px] top-9" onClick={() => setShowPassword(s => !s)}>
                            <i className={`fa-solid fa-eye absolute left-0 ${showPassword ? "" : "!hidden"}`}></i>
                            <i className={`fa-solid fa-eye-slash absolute left-[-1px] ${showPassword ? "!hidden" : ""}`}></i>
                        </div>
                    </label>

                    <div className="flex justify-between items-center">
                        <div className="cursor-pointer flex gap-2 items-center" onClick={() => setRememberUser(r => !r)}>
                            <div className={`h-8 w-16 rounded-[16px] border-2 border-black duration-200 ${rememberUser ? "bg-black" : "bg-white"} relative `}>
                                <div className={`w-6 h-6 absolute top-0.5 rounded-[50%] duration-200 ease-in-out left-0.5 ${rememberUser ? "bg-white translate-x-8" : "bg-black "}`}></div>
                            </div>
                            Remember me
                        </div>
                        <button className="cursor-pointer h-8 w-20 bg-white text-black rounded-[5px] duration-150 hover:bg-black hover:text-white">Login</button>
                    </div>
                </form>
            </div>
        </section >
    )
}