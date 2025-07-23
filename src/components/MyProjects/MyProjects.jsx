import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import DotButton from "./DotNav/DotButton.jsx";
import useDotButton from "./DotNav/useDotButton.jsx";
import "./carousel.css";

export default function MyProjects() {
  const [projectList, setProjectList] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1 },
    [Autoplay({ delay: 4000 })]
  );

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DOT NAVIGATION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~CARD LIST~~~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    setProjectList([
      {
        title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
        people: "Thai Pham",
        date: "10 Nov, 2023",
        tag: ["UX/UI Design", "App Design", "Web dev"],
        img: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
      },
      {
        title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
        people: "Thai Pham",
        date: "10 Nov, 2023",
        tag: ["UX/UI Design", "App Design", "Web dev"],
        img: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
      },
      {
        title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
        people: "Thai Pham",
        date: "10 Nov, 2023",
        tag: ["UX/UI Design", "App Design", "Web dev"],
        img: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
      },
      {
        title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
        people: "Thai Pham",
        date: "10 Nov, 2023",
        tag: ["UX/UI Design", "App Design", "Web dev"],
        img: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
      },
      {
        title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
        people: "Thai Pham",
        date: "10 Nov, 2023",
        tag: ["UX/UI Design", "App Design", "Web dev"],
        img: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
      },
      {
        title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
        people: "Thai Pham",
        date: "10 Nov, 2023",
        tag: ["UX/UI Design", "App Design", "Web dev"],
        img: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
      },
    ]);
  }, []);

  return (
    <section className=" flex flex-col text-[#344054] justify-between items-center w-full h-full max-w-[1298px] py-25 ">
      <div className="flex justify-between w-full items-center px-5">
        <h2 className="text-[40px] md:text-[64px] font-[600] w-full lg:basis-1/2">
          Lets have a look at my <span className="text-[#FD853A]">Project</span>
        </h2>

        <button className="h-15 basis-1/10 bg-[#FD853A] rounded-[30px] font-[700] text-[20px] text-white cursor-pointer hover:bg-[#fd643a] duration-200 hidden lg:inline">
          See all
        </button>
      </div>

      <main
        className="embla w-full mx-10 lg:mx-0 overflow-hidden h-auto mt-5"
        ref={emblaRef}
      >
        <div className="embla__container ">
          {projectList.map((item, index) => (
            <div key={index} className="embla__slide">
              <ItemCard
                title={item.title}
                people={item.people}
                date={item.date}
                tag={item.tag}
                img={item.img}
              ></ItemCard>
            </div>
          ))}
          {/* <div className="embla__slide">
            <ItemCard></ItemCard>
          </div>
          <div className="embla__slide">
            <ItemCard></ItemCard>
          </div>
          <div className="embla__slide">
            <ItemCard></ItemCard>
          </div> */}
        </div>

        <div className="embla__dots flex justify-center items-center gap-3 mt-8 ">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"duration-300 w-4 h-4 rounded-[8px] cursor-pointer bg-[#E4E7EC] embla__dot".concat(
                index === selectedIndex
                  ? " embla__dot--selected w-12 bg-[#FD853A]"
                  : ""
              )}
            />
          ))}
        </div>
      </main>

      <button className="h-15 w-[30%] mt-5 bg-[#FD853A] rounded-[30px] font-[700] text-[20px] text-white cursor-pointer hover:bg-[#fd643a] duration-200 inline lg:hidden">
        See all
      </button>
    </section>
  );
}

function ItemCard({ title, people, date, tag, img }) {
  return (
    // w-104
    <section className="w-full flex flex-col justify-between group duration-300 gap-7">
      <figure className="w-full h-100 relative flex flex-col justify-end items-center ease-in-out rounded-3xl overflow-hidden cursor-pointer border-white border-1 backdrop-blur-[10px] rounded-br-[57px] select-none">
        <div className=" w-full h-full z-3 overflow-hidden relative group-hover:scale-110 duration-300 ease-in-out">
          <img src={img} alt="item-pic" className="w-full h-full" />
        </div>

        <button className="w-[114px] h-[114px] bg-[#1D2939] absolute bottom-0 right-0 rounded-[50%] group-hover:bg-[#FD853A] z-10 duration-300 ease-in-out text-white">
          <i className="fa-solid fa-up-right-from-square text-4xl duration-300 group-hover:text-5xl"></i>
        </button>
      </figure>

      <section className="flex flex-wrap gap-2 select-none">
        {tag.map((item, index) => (
          <div
            className="bg-[#F2F4F7] text-black text-[15px] h-10 px-5 rounded-[26px] flex justify-center items-center cursor-pointer"
            key={index}
          >
            {item}
          </div>
        ))}
        {/* <div className="bg-[#F2F4F7] text-black text-[20px] h-13 px-7 rounded-[26px] flex justify-center items-center cursor-pointer">
          UX/UI Design
        </div>
        <div className="bg-[#F2F4F7] text-black text-[20px] h-13 px-7 rounded-[26px] flex justify-center items-center cursor-pointer">
          UX/UI Design
        </div>
        <div className="bg-[#F2F4F7] text-black text-[20px] h-13 px-7 rounded-[26px] flex justify-center items-center cursor-pointer">
          UX/UI Design
        </div> */}
      </section>

      <article className="flex text-[#344054] text-[20px] gap-10">
        <p className="flex before:w-2.5 before:h-2.5 before:bg-[#FD853A] before:rounded-[5px] items-center gap-2">
          {people}
        </p>
        <p className="flex before:w-2.5 before:h-2.5 before:bg-[#FD853A] before:rounded-[5px] items-center gap-2">
          {date}
        </p>
      </article>

      <h2 className="w-full text-[#344054] text-[32px] cursor-pointer">
        {title}
      </h2>
    </section>
  );
}
