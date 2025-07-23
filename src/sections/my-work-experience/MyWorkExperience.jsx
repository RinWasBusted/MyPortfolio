import { useState, useEffect } from "react";

export default function MyWorkExperience() {
  const [expList, setExpList] = useState([]);

  useEffect(
    () =>
      setExpList([
        {
          title: "Cognizant, Mumbai",
          subtitle: "Sep 2016- July 2020",
          skill: "Experience Designer",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione iste quibusdam neque rerum at repudiandae tempore?",
        },
        {
          title: "Cognizant, Mumbai",
          subtitle: "Sep 2016- July 2020",
          skill: "Experience Designer",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione iste quibusdam neque rerum at repudiandae tempore?",
        },
        {
          title: "Cognizant, Mumbai",
          subtitle: "Sep 2016- July 2020",
          skill: "Experience Designer",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione iste quibusdam neque rerum at repudiandae tempore?",
        },
      ]),
    []
  );

  return (
    <section className="flex flex-col items-center w-full max-w-[1298px]">
      <h2 className="flex justify-center items-center w-full h-58 text-[35px] sm:text-[64px] font-[600] text-[#344054]">
        My{" "}
        <p className="text-[#FD853A] ml-2 lg:ml-4 text-nowrap">
          Work Experience
        </p>
      </h2>

      <main className="w-full flex flex-col">
        {expList.map((item, index) => (
          <section
            className="w-full flex flex-col lg:flex-row lg:justify-between px-10 sm:px-15 pb-12 relative text-[20px] sm:text-[30px] lg:text-[40px] "
            key={index}
          >
            <article className="flex flex-col items-start w-full lg:w-[40%] relative">
              <h3 className="text-[#344054] font-[600]">{item.title}</h3>
              <p className="text-[#98A2B3] text-[12px] sm:text-[18px] lg:text-[24px]">
                {item.subtitle}
              </p>
            </article>
            <div className="h-full flex justify-center absolute lg:static sm:left-2 left-0 ">
              {index !== expList.length - 1 ? (
                <div className="absolute w-0 h-full border-2 border-[#1D2939] border-dashed top-0 opacity-0 lg:opacity-100"></div>
              ) : null}
              <div
                className={`w-12 h-12 border-dashed border-2 rounded-[50%] flex justify-center items-center ${
                  index % 2 == 0 ? "before:bg-[#FD853A]" : "before:bg-[#1D2939]"
                }  before:w-9 before:h-9 before:rounded-[50%] bg-white z-1 lg:scale-100 sm:scale-50 ms:scale-30 scale-30 `}
              ></div>
            </div>

            <article className="flex flex-col items-start w-full lg:w-[40%]">
              <h3 className="text-[#344054] font-[600]">{item.skill}</h3>
              <p className="text-[#98A2B3] text-[12px] sm:text-[18px] lg:text-[24px]">
                {item.desc}
              </p>
            </article>
          </section>
        ))}
      </main>
    </section>
  );
}
