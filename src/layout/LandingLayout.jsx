import LandingHeader from "../sections/landing/landing-header/LandingHeader"

export default function LandingLayout({ children }) {
    return (
        <div className="w-full h-full flex flex-col items-center ">
            <LandingHeader></LandingHeader>

            <main className="w-full max-w-[1280px] h-full flex pt-5 flex-col items-center main_layout">
                {children}
            </main>
        </div>
    )
}