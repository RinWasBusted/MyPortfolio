import background from "../../assets/MyServicesBackground.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";

export default function MyServices() {
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: 1 }, [
    Autoplay({ delay: 4000 }),
  ]);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SERVICES DESCRIPTION~~~~~~~~~~~~~~~~~~~~~~~~

  const servicesDescription =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, sequi illum dignissimos tempore voluptas qui.";

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~CARD LIST~~~~~~~~~~~~~~~~~~~~~
  const servicesList = [
    {
      service: "UI/UX Design",
      pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
    },
    {
      service: "HTML, CSS, JS",
      pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
    },
    {
      service: "Tailwind",
      pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
    },
    {
      service: "ReactJS",
      pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
    },
    {
      service: "Github",
      pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
    },
    {
      service: "Vite",
      pic: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="w-full bg-cover bg-center bg-no-repeat  min-h-220  overflow-hidden rounded-4xl lg:rounded-[71px] flex justify-center items-center select-none"
    >
      <div className="text-white flex flex-col justify-between items-center w-full h-full max-w-[1298px] py-25">
        <article className="w-full flex flex-col justify-start mb-10 px-10 md:flex-row md:justify-between md:items-center lg:px-0">
          <h3 className="text-[48px] font-[700] flex gap-3">
            My <p className="text-[#FD853A]"> Services</p>
          </h3>
          <p className="text-[20px] w-[50%]">{servicesDescription}</p>
        </article>

        <main
          className="embla w-full mx-10 lg:mx-0 overflow-hidden h-127"
          ref={emblaRef}
        >
          <div className="embla__container ">
            {servicesList.map((item, index) => (
              <div key={index} className="embla__slide">
                <ItemCard service={item.service} pic={item.pic}></ItemCard>
              </div>
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
