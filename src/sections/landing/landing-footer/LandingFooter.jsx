import { Link } from "react-router-dom"
import Logo from '../../../assets/QuickPortfolioLogo.png'


export default function LandingFooter() {
    return (
        <footer className="flex min-h-20 items-center flex-col md:flex-row justify-between w-full max-w-[1280px] px-25 py-5 font-[600] text-white text-[18px] border-white border-t-1 gap-5">
            <figure className="h-10 flex gap-3 items-center">
                <img src={Logo} alt="" className="h-full" />
                <h3>Quick Portfolio</h3>
            </figure>

            <Link>Privacy policy</Link>

            <Link>Cookies policy</Link>

            <Link>Terms of use</Link>


        </footer>
    )
}