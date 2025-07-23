import { useState, useEffect } from "react";

export default function NavBar({ scrollTargets }) {
  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [showMenu, setShowMenu] = useState(false);

  const [menuList, setMenuList] = useState([
    { content: "Home", active: true, ref: scrollTargets?.heroRef },
    { content: "Service", active: false, ref: scrollTargets?.serviceRef },
    {
      content: "Work Experience",
      active: false,
      ref: scrollTargets?.experienceRef,
    },
    { content: "About", active: false, ref: scrollTargets?.aboutRef },
    { content: "Project", active: false, ref: scrollTargets?.projectRef },
    { content: "Contact", active: false, ref: scrollTargets?.aboutRef },
  ]);

  const changeActive = (index) => {
    setMenuList((prev) =>
      prev.map((item, i) => ({
        ...item,
        active: i === index,
      }))
    );
    if (menuList[index].ref) {
      scrollTo(menuList[index].ref);
    }
    setShowMenu(false); // đóng menu khi chọn trên mobile
  };

  useEffect(() => {
    const handleResize = () => setShowMenu(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-[#171717] w-[95%] max-w-[1298px] h-21.5 flex items-center justify-between rounded-[43px] text-white px-5 lg:p-3 relative">
      <article className="flex-4/10 h-full hidden justify-evenly items-center shrink-0 lg:flex gap-2.5">
        {menuList.slice(0, 3).map((item, index) => (
          <MenuItem
            key={index}
            content={item.content}
            active={item.active}
            changeActive={() => changeActive(index)}
          />
        ))}
      </article>

      <figure className="w-full grow-1 h-full flex justify-start lg:justify-center items-center group gap-2.5 select-none">
        <div className="w-11.5 h-11.5 rounded-[50%] overflow-hidden duration-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOiucaQ4hyFBX9H_gsiYQVAt5hcB8peZHWBmI04y3sIFY4SSet5I7MLfRjYwRscGatF4&usqp=CAU"
            alt="logo"
          />
        </div>
        <div>
          <p className="font-[800] text-[20px] group-hover:opacity-0 duration-300 absolute">
            THAI P
          </p>
          <div className="flex flex-col items-start justify-center duration-300">
            <p className="duration-300 opacity-0 group-hover:opacity-50 text-[10px]">
              Made by
            </p>
            <p className="group-hover:inline font-[700] duration-300 opacity-0 group-hover:opacity-100">
              Thai Pham
            </p>
          </div>
        </div>
      </figure>

      <article className="flex-4/10 h-full hidden justify-evenly items-center shrink-0 lg:flex gap-2.5">
        {menuList.slice(3).map((item, index) => (
          <MenuItem
            key={index + 3}
            content={item.content}
            active={item.active}
            changeActive={() => changeActive(index + 3)}
          />
        ))}
      </article>

      <button
        className="lg:!hidden inline bg-[#FD853A] w-11.5 h-11.5 rounded-full cursor-pointer hover:opacity-80 shrink-0"
        onClick={() => setShowMenu((s) => !s)}
      >
        <i className={`fa-solid ${showMenu ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      <section
        className={`bg-[#171717] p-5 w-full min-h-50 absolute left-0 top-[110%] rounded-3xl flex-col items-center gap-5 lg:hidden z-10 ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        {menuList.map((item, index) => (
          <MenuItem
            key={index}
            content={item.content}
            active={item.active}
            changeActive={() => changeActive(index)}
          />
        ))}
      </section>
    </nav>
  );
}

function MenuItem({ content, active, changeActive }) {
  return (
    <button
      className={`w-full h-16.5 font-[600] text-[15px] rounded-[33px] duration-200 cursor-pointer ${
        active ? "bg-[#FD853A]" : "hover:bg-[#232323]"
      }`}
      onClick={changeActive}
    >
      {content}
    </button>
  );
}
