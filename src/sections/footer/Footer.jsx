import { useState } from "react";

export default function Footer({ scrollTargets }) {
  const [emailInput, setEmailInput] = useState("");

  // Debug: Kiểm tra scrollTargets được truyền vào

  const navList = [
    {
      content: "Home",
      ref: scrollTargets?.heroRef,
    },
    {
      content: "Service",
      ref: scrollTargets?.serviceRef,
    },

    {
      content: "Work Experience",
      ref: scrollTargets?.experienceRef,
    },
    {
      content: "About",
      ref: scrollTargets?.aboutRef,
    },
    {
      content: "Project",
      ref: scrollTargets?.projectRef,
    },
  ];

  function scrollTo(ref) {
    if (!ref || !ref.current) {
      console.error("Ref is null or undefined");
      return;
    }
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleEmailSubmit(e) {
    e.preventDefault();
    setEmailInput("");
  }

  return (
    <footer className="bg-[#272727] w-full text-[#FCFCFD] py-6 rounded-t-3xl flex flex-col items-center px-10 ">
      <section className="w-full max-w-[1298px] h-45 flex flex-col md:flex-row justify-between items-center border-b-1 border-[#475467] pb-10">
        <h2 className="text-[30px] sm:text-[50px] lg:text-[64px] font-[600]">
          Lets Connect there
        </h2>
        <button className="bg-[#FD853A] w-full md:w-50 h-15 rounded-[30px] text-[26px] group cursor-pointer hover:bg-white hover:text-[#FD853A] duration-200 ">
          Hire me
          <i className="fa-solid fa-arrow-right ml-3 rotate-[-45deg] duration-200 group-hover:rotate-0"></i>
        </button>
      </section>

      <main className="flex w-full max-w-[1298px] justify-between py-10 border-b-1 border-[#475467] flex-col lg:flex-row gap-10">
        <section className="flex-1/2 flex flex-col justify-between gap-5 items-start">
          <figure className="w-full h-full flex justify-start items-center group gap-2.5 select-none">
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

          <p className="text-[20px] w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
            quibusdam repudiandae blanditiis, iusto ad laboriosam quaerat ut
            ipsa quisquam consequatur error expedita placeat mollitia
            reprehenderit.
          </p>

          <nav className="flex gap-2.5 justify-between">
            <i className="fa-brands fa-facebook-f text-[#FD853A] bg-white/5 w-8 h-8 !flex justify-center items-center rounded-[50%] hover:bg-[#FD853A] hover:text-[#272727] cursor-pointer duration-100 "></i>
            <i className="fa-brands fa-youtube text-[#FD853A] bg-white/5 w-8 h-8 !flex justify-center items-center rounded-[50%] hover:bg-[#FD853A] hover:text-[#272727] cursor-pointer duration-100 "></i>
            <i className="fa-brands fa-whatsapp text-[#FD853A] bg-white/5 w-8 h-8 !flex justify-center items-center rounded-[50%] hover:bg-[#FD853A] hover:text-[#272727] cursor-pointer duration-100 "></i>
            <i className="fa-brands fa-instagram text-[#FD853A] bg-white/5 w-8 h-8 !flex justify-center items-center rounded-[50%] hover:bg-[#FD853A] hover:text-[#272727] cursor-pointer duration-100 "></i>
            <i className="fa-brands fa-twitter text-[#FD853A] bg-white/5 w-8 h-8 !flex justify-center items-center rounded-[50%] hover:bg-[#FD853A] hover:text-[#272727] cursor-pointer duration-100 "></i>
          </nav>
        </section>
        <nav className="flex-1/10 text-[16px]">
          <h3 className="text-[#FD853A] font-[600] text-[20px] mb-5">
            Navigation
          </h3>
          {navList.map((item, index) => (
            <p
              className="py-2 cursor-pointer hover:text-[#FD853A]"
              key={index}
              onClick={() => scrollTo(item.ref)}
            >
              {item.content}
            </p>
          ))}
        </nav>
        <article className="flex-1/10">
          <h3 className="text-[#FD853A] font-[600] text-[20px] mb-5">
            Contact
          </h3>
          <p className="py-2">+84 123456789</p>
          <p className="py-2">adsfasasdexample@gmail.com</p>
          <p className="py-2">examadsadasple.com</p>
        </article>
        <form action="" className="flex-3/10" onSubmit={handleEmailSubmit}>
          <h3 className="text-[#FD853A] font-[600] text-[20px] mb-5">
            Get the lastest information
          </h3>
          <div className="w-full h-12 rounded-2xl bg-white overflow-hidden flex justify-between text-black">
            <input
              type="text"
              placeholder="Email Address"
              className="outline-none px-4 h-full w-full grow-1"
              value={emailInput}
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
            <button className="w-11 shrink-0 bg-[#FD853A] h-full text-[#FCFCFD] cursor-pointer duration-200 group hover:bg-[#fd643a]">
              <i className="fa-solid fa-paper-plane duration-200 group-hover:scale-110"></i>
            </button>
          </div>
        </form>
      </main>
      <article className="pt-10 flex justify-between flex-col lg:flex-row gap-5 text-[20px] w-full max-w-[1298px]">
        <p>Copyright© 2025 RinWasBusted. All Rights Reserved.</p>

        <div>
          <a href="" className="cursor-pointer">
            User Term & Conditions{" "}
          </a>{" "}
          |{" "}
          <a href="" className="cursor-pointer">
            Privacy Policy
          </a>
        </div>
      </article>
    </footer>
  );
}
