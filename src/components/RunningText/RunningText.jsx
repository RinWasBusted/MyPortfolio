import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";

export default function RunningText() {
  const [textList, setTextList] = useState([]);

  useEffect(() => {
    setTextList([
      "UX Desing",
      "App Design",
      "Dashboard",
      "Wireframe",
      "User Research",
    ]);
  }, []);

  return (
    <section className="w-[3000px] h-36  flex justify-center items-center overflow-hidden relative">
      <div className="h-full bg-[#FB6514] w-[100vw]  absolute  rounded-tl-4xl rounded-br-4xl"></div>
      <Marquee
        className="bg-white !w-[3000px] h-[50%] rotate-[-3deg] flex items-center "
        autoFill={true}
      >
        {textList.map((item, index) => (
          <div key={index} className="h-full flex items-center text-[48px]">
            {item}
            <i className="fa-solid fa-star text-[34px] text-[#FD853A] mx-2"></i>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
