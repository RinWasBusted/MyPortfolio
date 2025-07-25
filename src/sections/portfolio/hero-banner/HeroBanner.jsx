import youngwomen from "../../../assets/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall2.png";
import youngwomendeco from "../../../assets/youngwomandeco.png";
import vector1 from "../../../assets/vector1.png";
import vector2 from "../../../assets/vector2.png";
import ellipse from "../../../assets/ellipse.png";

export default function HeroBanner() {
  return (
    <section className=" w-full max-w-[1298px] h-150 sm:h-180 md:h-200 lg:h-211.5 flex flex-col justify-end items-center text-[#171717] relative px-5">
      <main className="relative max-w-202.5 w-full h-full flex justify-center items-end peer group z-5 ">
        <div
          id="ellipse"
          className=" max-w-202.5 lg:w-full w-[80%]  h-101.5 rounded-t-[406px] absolute"
        >
          <img
            src={ellipse}
            alt="ellipse"
            className="absolute w-full bottom-0 "
          />
        </div>
        <img
          src={youngwomendeco}
          alt="young women deco"
          className="absolute bottom-0 origin-bottom duration-300 group-hover:scale-130 group-hover:opacity-100 scale-70 opacity-0 ease-in-out"
        />
        <img
          src={youngwomen}
          alt="young women pic"
          className="absolute bottom-0 origin-bottom scale-95"
        />
        <section className="absolute w-92 h-20 backdrop-blur-sm bg-transparent bottom-10 z-10 rounded-[40px] shadow-lg shadow-orange-500/50 text-white hidden sm:flex flex-row-reverse justify-between items-center px-2.5 gap-2.5 font-[600] text-[25px] ">
          <button className="flex justify-center duration-300 items-center grow-1 w-32 h-15 cursor-pointer peer hover:w-52 hover:bg-[#FD853A] rounded-[30px] group/btn">
            Hire me
            <i className="fa-solid fa-up-right-from-square ml-2 !hidden group-hover/btn:!inline"></i>
          </button>
          <button className="w-52 h-15 bg-[#FD853A] rounded-[30px] flex justify-center items-center cursor-pointer peer-hover:w-32 duration-300 peer-hover:bg-transparent group">
            Portfolio
            <i className="fa-solid fa-up-right-from-square ml-2 group-peer-hover:!hidden"></i>
          </button>
        </section>
      </main>
      <article className="absolute top-18 text-4xl md:text-7xl lg:text-8xl font-[600] flex flex-col items-center gap-2.5 peer-hover:translate-y-[200px] duration-300 peer-hover:opacity-0 opacity-100 px-10 lg:px-0">
        <div className=" font-[600] text-[20px] h-11 w-26 rounded-[22px] border-[3px] flex justify-center items-center relative">
          Hello!
          <img
            src={vector1}
            alt="vector1"
            className="absolute right-[-30px] top-[-25px]"
          />
        </div>
        <h2 className="text-center">
          I'm <p className="inline text-[#FD853A]">Jenny</p>, <br />
          Product Designer
          <img
            src={vector2}
            alt="vector2"
            className="absolute left-[-70px] bottom-[-70px]"
          />
        </h2>
      </article>
      <article className="absolute hidden lg:flex flex-col left-5 text-[#344054] text-[20px] w-82 font-[600] top-[50%] duration-300 peer-hover:translate-y-[-200px]">
        <i className="fa-solid fa-quote-left text-[36px] w-9 h-9"></i>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quod
          ad nesciunt?
        </p>
      </article>
      <article className="absolute hidden lg:flex flex-col text-[#171717] text-[20px] font-[600] top-[50%] right-5 text-end duration-300 peer-hover:translate-y-[-200px]">
        <div className="text-[#FD853A]">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h3 className="text-[47px] font-[700] h-14">10 Years</h3>
        <p>Experience</p>
      </article>
    </section>
  );
}