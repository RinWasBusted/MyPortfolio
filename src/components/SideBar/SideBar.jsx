import { useState } from "react";

import Logo from "../../assets/tvt-logo.png";
import Menu from "./Menu.jsx";

function SideBar() {
  const [expand, setExpand] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const menuItems = [
    {
      content: "Dashboard",
      icon: "fa-regular fa-calendar",
    },
    {
      content: "Profile",
      icon: "fa-solid fa-user",
    },
    {
      content: "Setting",
      icon: "fa-solid fa-gear",
    },
  ];

  // ~~~~~~~~~~~~~~~~~RESET EXPAND~~~~~~~~~~~~~~~~~~~~~~
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      setExpand(true);
    } else {
      setShowSideBar(false);
    }
  });

  return (
    <>
      <div id="container" className="relative w-0 lg:w-13 z-10">
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~SHOW SIDEBAR BUTTON~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div
          className="absolute top-4 left-4 lg:hidden"
          onClick={() => setShowSideBar((s) => !s)}
        >
          <i
            className={`fa-solid text-[30px] absolute !inline-block duration-200 z-4 ${
              showSideBar ? "fa-xmark" : "fa-bars"
            }`}
          ></i>
        </div>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NAV BAR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

        <nav
          className={`relative left-0 flex w-50 bg-white h-[100vh] flex-col pt-30 pb-10 items-center lg:translate-0 lg:shadow-2xl justify-between  translate-x-[-100%] origin-left duration-200   ${
            showSideBar ? "shadow-2xl !translate-0" : ""
          } ${expand ? "" : "!w-13"}`}
        >
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~EXPAND BUTTON~~~~~~~~~~~~~~~~~~~~ */}
          <div
            className="absolute top-2 text-[30px] w-full flex justify-end pr-3 lg:visible invisible "
            onClick={() => setExpand((e) => !e)}
          >
            <i
              className={` ${
                !expand
                  ? "fa-solid fa-angles-right cursor-pointer hover:text-[#5051F9]"
                  : "fa-solid fa-angles-left cursor-pointer duration-100 hover:text-[#5051F9]"
              }`}
            ></i>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~LOGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <a
            className={`w-[30%] absolute top-10 cursor-pointer hover:scale-[110%] duration-200 ${
              expand ? "" : "invisible"
            }`}
          >
            <img src={Logo} alt="TVT LOGO" />
          </a>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Menu~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <Menu expand={expand} menuItems={menuItems}></Menu>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
