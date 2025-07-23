import woman_pointing_deco from "../../assets/woman-pointing-deco.png";
import woman_pointing from "../../assets/woman-pointing.png";

export default function WhyHireMe() {
  return (
    <section className="bg-[#F2F4F7] w-full flex justify-center items-center">
      <div className="w-full max-w-[1298px] h-full flex flex-col lg:flex-row  justify-center items-center py-25 px-10 md:px-15">
        <figure className="h-auto max-w-150 flex relative group mb-10">
          <img
            src={woman_pointing_deco}
            alt="woman_pointing_deco"
            className="absolute scale-60 opacity-50 duration-200 group-hover:scale-100 group-hover:opacity-100"
          />
          <img
            src={woman_pointing}
            alt="woman_pointing"
            className="z-1 duration-200 group-hover:translate-y-5 relative"
          />
        </figure>
        <main className="flex flex-col gap-10">
          <h2 className="text-[#344054] lg:text-[64px] sm:text-[50px] text-[40px] font-[600]">
            Why <span className="text-[#FD853A]">Hire me</span>?
          </h2>
          <p className="text-[#98A2B3] lg:text-[20px] sm:text-[16px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            atque dolore voluptate! Asperiores provident odio quod id.
          </p>

          <article className="flex flex-col">
            <h3 className="text-[36px] text-[#1D2939] font-[600]">450+</h3>
            <p className="text-[20px] text-[#667085]">Project Completed</p>
          </article>

          <button className="text-[#151515] font-[600] text-[32px] border-1 h-25 w-50 rounded-3xl cursor-pointer hover:bg-[#151515] hover:text-white duration-200">
            Hire me
          </button>
        </main>
      </div>
    </section>
  );
}
