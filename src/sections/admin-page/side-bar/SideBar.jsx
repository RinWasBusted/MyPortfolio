
export default function SideBar({ handleChangeBoard }) {
    return (
        <aside className="fixed left-0 top-0 h-[100vh] w-[20vw] bg-[#2C2C2C] border-[#444444] text-white border-r-1 flex flex-col items-center">
            <figure className="  py-10 w-full h-15 shrink-0 flex justify-center items-center border-[#444444] border-b-1">
                <h1 className="text-[30px] font-bold">Admin page</h1>
            </figure>
            <nav className=" h-full grow-1 w-full flex flex-col ">
                <button className="text-[16px] text-start px-10 w-full h-16 cursor-pointer hover:bg-white/5 duration-100 " onClick={() => handleChangeBoard('login')}>Profile</button>
                <button className="text-[16px] text-start px-10 w-full h-16 cursor-pointer hover:bg-white/5 duration-100 " onClick={() => handleChangeBoard('HeroBannerForm')} > Hero banner</button>
                <button className="text-[16px] text-start px-10 w-full h-16 cursor-pointer hover:bg-white/5 duration-100 ">My services</button>
                <button className="text-[16px] text-start px-10 w-full h-16 cursor-pointer hover:bg-white/5 duration-100 ">My work experience</button>
                <button className="text-[16px] text-start px-10 w-full h-16 cursor-pointer hover:bg-white/5 duration-100 ">Contact</button>
                <button className="text-[16px] text-start px-10 w-full h-16 cursor-pointer hover:bg-white/5 duration-100 ">My project</button>
                <button className="text-[16px] text-start px-10 w-full h-16 cursor-pointer hover:bg-white/5 duration-100 ">Footer</button>

            </nav>
        </aside >
    )
}