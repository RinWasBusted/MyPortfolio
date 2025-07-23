import NavBar from "../sections/nav-bar/NavBar";
import Footer from "../sections/footer/Footer";

function MainLayout({ children, scrollTargets }) {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <NavBar scrollTargets={scrollTargets} />
      <main className="w-full h-full flex pt-5 flex-col items-center main_layout">
        {children}
      </main>
      <Footer scrollTargets={scrollTargets} />
    </div>
  );
}

export default MainLayout;
