import { Link } from "react-router-dom"

export default function NotFound404Layout() {
    return (
        <div className=" text-white  flex flex-col items-center gap-10">
            <h1 className="text-[100px] h-fit">404</h1>
            <h3 className="text-[60px] opacity-50">Page not found</h3>
            <p className="opacity-50">
                We're sorry, the page you requested could not be found
                <br />
                Please go back to the home page
            </p>

            <Link to={'/'} className="bg-white text-black px-7 py-5 rounded-[30px] font-[600] text-[18px] hover:opacity-70 duration-100">Go home</Link>
        </div>
    )
}