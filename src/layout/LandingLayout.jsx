import LandingHeader from "../sections/landing/landing-header/LandingHeader"
import LandingFooter from "../sections/landing/landing-footer/LandingFooter"

export default function LandingLayout({ children }) {
    return (
        <div className="w-full h-full flex flex-col items-center bg-[#2B2B2B]">
            <LandingHeader></LandingHeader>

            <main className="w-full max-w-[1080px] pt-25 h-full flex  flex-col items-center main_layout">
                {children}
            </main>

            <LandingFooter></LandingFooter>
        </div>
    )
}