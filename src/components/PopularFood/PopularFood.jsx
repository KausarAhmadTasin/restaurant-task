import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PointTitle from "../shared/PointTitle/PointTitle";

// Slider Data
const sliderItems = [
  {
    name: "vegetables burger",
    description: "Barbecue Italian cuisine pizza",
    image: "veg-burger-item.png",
  },
  {
    name: "Spacial Pizza",
    description: "Barbecue Italian cuisine pizza",
    image: "pizza-item.png",
  },
  {
    name: "Spacial French fries r",
    description: "Barbecue Italian cuisine",
    image: "french-fries-item.png",
  },
  {
    name: "Cuisine Chickenr",
    description: "Japanese Cuisine Chicken",
    image: "chicken-item.png",
  },
  {
    name: "Spacial French fries r",
    description: "Barbecue Italian cuisine",
    image: "french-fries-item.png",
  },
  {
    name: "Cuisine Chickenr",
    description: "Japanese Cuisine Chicken",
    image: "chicken-item.png",
  },
];

// Custom navigation button component
const NavigationButton = ({ direction }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute top-0 ${
        direction === "prev" ? "right-28" : "right-6"
      } 
        bg-white hover:text-Red z-30 p-4 rounded-full shadow-lg 
        transition`}
    >
      {direction === "prev" ? (
        <IoIosArrowBack className="text-3xl" />
      ) : (
        <IoIosArrowForward className="text-3xl" />
      )}
    </button>
  );
};

const PopularFood = () => {
  return (
    <div className="relative w-full bg-[#FBF7F2] py-32">
      <div className="container mx-auto">
        <h1 className="font-bebas text-[3.875rem]">POPULAR FOOD ITEMS</h1>
        <PointTitle>Crispy, Every Bite Taste</PointTitle>
        <div className="relative">
          {/* Swiper with Navigation */}
          <Swiper
            slidesPerView={4}
            spaceBetween={32}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper mt-2"
          >
            {/* Custom Navigation Buttons */}
            <NavigationButton direction="prev" />
            <NavigationButton direction="next" />

            {/* Swiper slides */}
            {sliderItems.map((item, index) => (
              <SwiperSlide className="mt-28" key={index}>
                <div className="bg-white flex flex-col items-center justify-center p-8">
                  <img
                    src={item.image}
                    className="min-h-[8.25rem] flex-grow"
                    alt=""
                  />
                  <div className="border-4 flex-grow border-Red border-b w-16 my-6"></div>
                  <h2 className="font-bebas text-2xl flex-grow">{item.name}</h2>
                  <p className="font-inter my-2">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Side Image */}
      <img className="absolute bottom-32 left-0" src="capsicum.png" alt="" />
    </div>
  );
};

export default PopularFood;
