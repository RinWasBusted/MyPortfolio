import Header from "../sections/admin-page/header/Header.jsx"

export default function AdminLayout({ handleChangeLayout, children }) {
    return <div className="w-full min-h-[100vh] flex flex-col items-center bg-[#2C2C2C] text-white">
        <Header handleChangeLayout={handleChangeLayout}></Header>
        <main className="h-full w-[95vw] grow-1 bg-[#383838] m-10 rounded-2xl flex flex-col items-center p-10">
            {children}
        </main>
    </div>;
}
