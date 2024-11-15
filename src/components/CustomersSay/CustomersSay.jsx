import PointTitle from "../shared/PointTitle/PointTitle";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const customerFeedbacks = [
  {
    id: 1,
    name: "Khalid Al Dawsry",
    address: "Jeddah, Saudi",
    feedback:
      "You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    imageURL: "https://picsum.photos/200",
  },
  {
    id: 1,
    name: "Khalid Al Dawsry",
    address: "Jeddah, Saudi",
    feedback:
      "You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    imageURL: "https://picsum.photos/200",
  },
  {
    id: 1,
    name: "Khalid Al Dawsry",
    address: "Jeddah, Saudi",
    feedback:
      "You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    imageURL: "https://picsum.photos/200",
  },
  {
    id: 1,
    name: "Khalid Al Dawsry",
    address: "Jeddah, Saudi",
    feedback:
      "You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    imageURL: "https://picsum.photos/200",
  },
  {
    id: 1,
    name: "Khalid Al Dawsry",
    address: "Jeddah, Saudi",
    feedback:
      "You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    imageURL: "https://picsum.photos/200",
  },
];

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

const CustomersSay = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="relative my-32">
      <div className="container mx-auto text-black">
        <PointTitle>Crispy, Every Bite Taste</PointTitle>
        <h1 className="text-[3.875rem] mb-4 font-bebas">
          What Some of my Customers Say
        </h1>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {/* Custom Navigation Buttons */}
          <NavigationButton direction="prev" />
          <NavigationButton direction="next" />
          {customerFeedbacks.map((customerFeedback) => (
            <SwiperSlide className="mt-28" key={customerFeedback.id}>
              {" "}
              <div className="flex font-roboto items-center justify-between gap-x-10 bg-Yellow">
                {/* Left Side: Testimonial */}
                <div className="w-2/5 h-full">
                  <div className="mx-auto md:w-2/3 flex flex-col justify-between gap-y-36">
                    {" "}
                    <div className="text-xl mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 310 310"
                        fill="#000"
                        width={20}
                        className="relative bottom-3 right-1"
                        height={25}
                      >
                        <path d="M79 142.16c-6.02 0-11.42.28-16.25.81 7.1-29.03 22.95-44.36 45.88-56.04 5.33-2.71 7.63-9.1 5.23-14.57l-6.04-13.77c-2.59-5.91-9.62-8.44-15.38-5.53-22.1 11.11-37.39 23.92-48.76 40.63C28.42 116.11 21 145.6 21 183.83v16.52c0 31.95.11 57.81 58 57.81 58 0 58-25.97 58-58s.38-58-58-58zm152 0c-6.02 0-11.42.28-16.25.81 7.1-29.03 22.95-44.36 45.88-56.04 5.33-2.71 7.63-9.1 5.23-14.57l-6.04-13.77c-2.59-5.91-9.62-8.44-15.38-5.53-22.1 11.11-37.39 23.92-48.76 40.63C180.42 116.11 173 145.6 173 183.83v16.52c0 31.95.11 57.81 58 57.81 58 0 58-25.97 58-58s.38-58-58-58z"></path>
                      </svg>
                      <p className="max-w-[22.4953125rem]">
                        {customerFeedback.feedback}
                      </p>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <p className="font-bebas">
                              {customerFeedback.name}
                            </p>
                            <p className="text-sm opacity-80 font-roboto">
                              {customerFeedback.address}
                            </p>
                          </div>

                          <div className="flex-shrink-0 mr-3">
                            <img
                              src={customerFeedback.imageURL}
                              alt="Profile"
                              className="w-10 h-10 rounded-full"
                            />
                          </div>
                        </div>
                        <div className="relative mt-2">
                          <div className="absolute right-0 h-1 w-16 bg-Red"></div>
                          <div className="w-full relative top-1 h-[1px] bg-black"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Video with Custom Play Button */}
                <div className="w-3/5 relative right-0 flex justify-center items-center">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls
                    poster="video-img.png"
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                    style={{ height: "34.7481875rem" }}
                    onClick={handlePlayPause}
                  />

                  {/* Custom Play Button Overlay */}
                  {!isPlaying && (
                    <button
                      onClick={handlePlayPause}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
                    >
                      <svg
                        className="w-12 h-12 p-2 text-black opacity-80 rounded-full bg-Yellow hover:opacity-100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Right side image */}
      <img className="absolute left-0 top-10 z-[-10]" src="221.png" alt="" />

      {/* Left side image */}
      <img className="absolute right-0 bottom-16 z-[-10]" src="12.png" alt="" />
    </div>
  );
};

export default CustomersSay;
