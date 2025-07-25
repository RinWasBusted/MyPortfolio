import Header from "../sections/admin-page/header/Header.jsx"

export default function AdminLayout({ handleChangeLayout, children }) {
    return <div className="w-full min-h-[100vh] flex flex-col items-center bg-[#2C2C2C] text-white">
        <Header handleChangeLayout={handleChangeLayout}></Header>
        <main className="h-[100px] w-full grow-1">
            {children}
        </main>
    </div>;
}
