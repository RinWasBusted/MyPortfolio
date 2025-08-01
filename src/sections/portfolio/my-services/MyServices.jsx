import { useCallback, useEffect, useState } from "react";
import background from "../../../assets/MyServicesBackground.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import DotButton from "./dot-nav/DotButton.jsx";
import useDotButton from "./dot-nav/useDotButton.jsx";
import "./carousel.css";

export default function MyServices() {
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
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GET DATA~~~~~~~~~~~~~~~~~~~~~~~~

  const [description, setDescription] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('my-service-data'));
    if (data) {
      setDescription(data.description);
      setCards(data.cards);
    }
  }, [])


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~CARD LIST~~~~~~~~~~~~~~~~~~~~~
  // const servicesList = [
  //   {
  //     service: "UI/UX Design",
  //     pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
  //   },
  //   {
  //     service: "HTML, CSS, JS",
  //     pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
  //   },
  //   {
  //     service: "Tailwind",
  //     pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
  //   },
  //   {
  //     service: "ReactJS",
  //     pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
  //   },
  //   {
  //     service: "Github",
  //     pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
  //   },
  //   {
  //     service: "Vite",
  //     pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
  //   },
  // ];

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="w-full bg-cover bg-center bg-no-repeat  min-h-220  overflow-hidden rounded-4xl lg:rounded-[71px] flex justify-center items-center select-none"
    >
      <div className="text-white flex flex-col justify-between items-center w-full h-full max-w-[1298px] py-25">
        <article className="w-full flex flex-col justify-start mb-10 px-10 md:flex-row md:justify-between md:items-center lg:px-5">
          <h3 className="text-[48px] font-[700] flex gap-3">
            My <p className="text-[#FD853A]"> Services</p>
          </h3>
          <p className="text-[20px] md:w-[50%] w-full">{description}</p>
        </article>

        <main
          className="embla w-full mx-10 lg:mx-0 overflow-hidden h-auto"
          ref={emblaRef}
        >
          <div className="embla__container ">
            {cards.map((card, index) => (
              <div key={index} className="embla__slide">
                <ItemCard service={card.name} pic={card.pic}></ItemCard>
              </div>
            ))}
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
      </div>
    </div>
  );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ITEM CARD~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function ItemCard({ service, pic }) {
  return (
    // w-104
    <div className="w-full h-127 border-white border-1 rounded-[20px] backdrop-blur-[10px] hover:bg-[#FD853A] cursor-pointer bg-white/5 overflow-hidden flex flex-col justify-between pt-10 rounded-br-[57px] rounded-tl-[57px] group duration-300 ease-in-out">
      <h3 className="w-full  h-[65px] text-[32px] font-[600] px-[40px] border-b-white border-b-1 ">
        {service}
      </h3>
      <main className="w-full h-[351px] relative flex flex-col justify-end items-center group-hover:scale-110 duration-300 ease-in-out">
        <div className="rounded-[40px] w-[80%] h-[300px] absolute bg-black/30 backdrop-blur-[80px]  bottom-13 z-2"></div>
        <div className="rounded-[40px] w-[90%] h-[300px] absolute bg-[#9E9D9D] bottom-7 z-2"></div>
        <div className="rounded-t-[40px] w-full h-[300px] z-3 overflow-hidden relative">
          <img src={pic} alt="item-pic" className="w-full h-full" />
        </div>
      </main>
      <button className="w-[114px] h-[114px] bg-[#1D2939] absolute bottom-0 right-0 rounded-[50%] group-hover:bg-[#FD853A] z-10 duration-300 ease-in-out ">
        <i className="fa-solid fa-up-right-from-square text-4xl duration-300 group-hover:text-5xl"></i>
      </button>
    </div>
  );
}
