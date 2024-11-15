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
    <div className="relative lg:my-32 my-10 mx-2 lg:mx-0">
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
              <div className="relative flex flex-col-reverse lg:flex-row font-roboto items-center justify-between gap-x-10 bg-Yellow">
                {/* Left Side: Testimonial */}
                <div className="lg:w-2/5 h-full lg:mt-0 mt-10">
                  <div className="mx-auto md:w-2/3 px-2 lg:px-0 flex flex-col justify-between lg:gap-y-36">
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
                      <div className="mx-5 mb-5 lg:mb-0">
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
                <div className="lg:w-3/5 relative right-0 flex justify-center items-center">
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

                {/* Flower svg */}
                <div className="absolute hidden lg:block bottom-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="78"
                    viewBox="0 0 40 78"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7943 77.4766L23.3448 61.5335L39.1592 54.9292L32.6086 38.9862L39.1592 23.042L23.3448 16.4377L16.7943 0.494644L0.108093 7.46306V38.6221L0.108144 39.2361L0.108093 39.8652V70.5082L16.7943 77.4766ZM1.85178 36.8641V8.63771L15.8506 2.79156L21.6491 16.9042L1.85178 36.8641ZM22.8821 18.1473L36.8809 23.9934L31.0824 38.1072H3.08475L22.8821 18.1473ZM3.08586 39.8652H31.0824L36.8809 53.9778L22.8821 59.8239L3.08586 39.8652ZM21.6491 61.067L15.8506 75.1796L1.85178 69.3335V41.1071L21.6491 61.067Z"
                      fill="#243054"
                    />
                    <path
                      d="M27.3183 28.7669C27.3183 30.1194 26.2299 31.2156 24.8885 31.2156C23.5481 31.2156 22.4598 30.1194 22.4598 28.7669C22.4598 27.4145 23.5481 26.3183 24.8885 26.3183C26.2299 26.3183 27.3183 27.4145 27.3183 28.7669Z"
                      fill="#243054"
                    />
                    <path
                      d="M13.5512 14.0744C13.5512 15.4269 12.464 16.5242 11.1225 16.5242C9.78109 16.5242 8.69385 15.4269 8.69385 14.0744C8.69385 12.722 9.78109 11.6258 11.1225 11.6258C12.464 11.6258 13.5512 12.722 13.5512 14.0744Z"
                      fill="#243054"
                    />
                    <path
                      d="M13.5512 62.3497C13.5512 63.7022 12.464 64.7983 11.1225 64.7983C9.78109 64.7983 8.69385 63.7022 8.69385 62.3497C8.69385 60.9972 9.78109 59.9011 11.1225 59.9011C12.464 59.9011 13.5512 60.9972 13.5512 62.3497Z"
                      fill="#243054"
                    />
                    <path
                      d="M27.3183 48.357C27.3183 49.7095 26.2299 50.8057 24.8885 50.8057C23.5481 50.8057 22.4598 49.7095 22.4598 48.357C22.4598 47.0046 23.5481 45.9084 24.8885 45.9084C26.2299 45.9084 27.3183 47.0046 27.3183 48.357Z"
                      fill="#243054"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Right side image */}
      <img
        className="absolute left-0 top-10 z-[-10] hidden lg:block"
        src="221.png"
        alt=""
      />

      {/* Left side image */}
      <img
        className="absolute right-0 bottom-16 z-[-10] hidden lg:block"
        src="12.png"
        alt=""
      />
    </div>
  );
};

export default CustomersSay;
