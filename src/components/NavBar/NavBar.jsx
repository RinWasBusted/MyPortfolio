import { useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuList, setMenuList] = useState([
    {
      content: "Home",
      active: true,
    },
    {
      content: "About",
      active: false,
    },
    {
      content: "Service",
      active: false,
    },
    {
      content: "Resume",
      active: false,
    },
    {
      content: "Project",
      active: false,
    },
    {
      content: "Contact",
      active: false,
    },
  ]);
  window.addEventListener("resize", () => {
    setShowMenu(false);
  });

  function changeActive(index) {
    setMenuList(
      menuList.map((item, i) => {
        if (index == i) return { ...item, active: true };
        return { ...item, active: false };
      })
    );
  }

  return (
    <>
      <nav className="bg-[#171717] w-full max-w-[1298px] h-21.5 flex items-center justify-between rounded-[43px] text-white px-5 lg:p-3 relative ">
        <article className="w-115 h-full hidden justify-evenly items-center shrink-0 lg:flex gap-2.5">
          {menuList.map((item, index) => {
            if (index < 3)
              return (
                <MenuItem
                  content={item.content}
                  active={item.active}
                  changeActive={() => changeActive(index)}
                ></MenuItem>
              );
          })}
        </article>
        <figure className="w-full grow-1 h-full flex justify-start lg:justify-center items-center group gap-2.5">
          <div className="w-11.5 h-11.5 rounded-[50%] overflow-hidden duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOiucaQ4hyFBX9H_gsiYQVAt5hcB8peZHWBmI04y3sIFY4SSet5I7MLfRjYwRscGatF4&usqp=CAU"
              alt="logo"
            />
          </div>
          <div>
            <p className="font-[800] text-[20px] group-hover:opacity-0 duration-300 absolute ">
              THAI P
            </p>
            <div className="flex flex-col items-start justify-center duration-300">
              <p className=" duration-300 opacity-0 group-hover:opacity-50  group-hover:inline text-[10px] ">
                Made by
              </p>
              <p className="group-hover:inline font-[700] duration-300 opacity-0 group-hover:opacity-100">
                Thai Pham
              </p>
            </div>
          </div>
        </figure>
        <article className="w-115 h-full hidden justify-evenly items-center shrink-0 lg:flex gap-2.5">
          {menuList.map((item, index) => {
            if (index >= 3)
              return (
                <MenuItem
                  content={item.content}
                  active={item.active}
                  changeActive={() => changeActive(index)}
                ></MenuItem>
              );
          })}
        </article>
        <button
          className="lg:!hidden inline bg-[#FD853A] w-11.5 h-11.5 rounded-[50%] cursor-pointer hover:opacity-80 shrink-0"
          onClick={() => setShowMenu((s) => !s)}
        >
          <i className={`fa-solid  ${showMenu ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
        <section
          className={`bg-[#171717] p-5 w-[100vw] min-h-50 absolute left-0 top-[110%] rounded-3xl flex-col items-center gap-5 lg:hidden z-10 ${
            showMenu ? "flex" : "hidden"
          } `}
        >
          {menuList.map((item, index) => {
            return (
              <MenuItem
                content={item.content}
                active={item.active}
                changeActive={() => changeActive(index)}
              ></MenuItem>
            );
          })}
        </section>
      </nav>
    </>
  );
}

function MenuItem({ content, active, changeActive }) {
  return (
    <button
      className={`w-full h-16.5 font-[600] text-[15px] rounded-[33px] duration-200 cursor-pointer ${
        active ? "bg-[#FD853A]" : " hover:bg-[#232323]"
      }`}
      onClick={changeActive}
    >
      {content}
    </button>
  );
}
//w-3
