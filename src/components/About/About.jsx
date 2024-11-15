import { useState } from "react";
import Button from "../shared/Button/Button";
import CircularSlider from "@fseehawer/react-circular-slider";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Define the tab content using strings only
  const tabs = {
    about: {
      title: "Exceptional Culinary Experience and Delicious Food",
      content:
        "Experience the art of fine dining with us. Our team blends passion and expertise to create dishes that not only satisfy but captivate. From rich flavors to exquisite presentation, every meal is crafted with care and precision. Enjoy an ambiance that enhances your dining experience, making each moment memorable.",
    },
    experience: {
      title: "Our Experience",
      content:
        "Experience the art of fine dining with us. Our team blends passion and expertise to create dishes that not only satisfy but captivate. From rich flavors to exquisite presentation, every meal is crafted with care and precision. Enjoy an ambiance that enhances your dining experience, making each moment memorable. Our commitment to quality and innovation ensures a delightful journey for your taste buds, bringing together both tradition and creativity. Join us to savor exceptional food and create lasting memories with every bite.",
    },
    contact: {
      title: "Contact Us",
      content:
        "Experience the art of fine dining with us. Our team blends passion and expertise to create dishes that not only satisfy but captivate. From rich flavors to exquisite presentation, every meal is crafted with care and precision. Enjoy an ambiance that enhances your dining experience, making each moment memorable. Our commitment to quality and innovation ensures a delightful journey for your taste buds, bringing together both tradition and creativity. Join us to savor exceptional food and create lasting memories with every bite.",
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="w-full relative">
      <div className="lg:container lg:mx-auto mx-2 lg:pt-20 lg:py-5 lg:px-5 flex lg:flex-row flex-col gap-x-20 gap-y-8 items-start">
        {/* Image of the Burger and Beer */}
        <div className="relative">
          <img
            className="lg:max-w-[38.5625rem]"
            src="burger.png"
            alt="Burger"
          />

          {/* Market Experiences Overlay */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 w-[15rem] h-[7rem] flex flex-col items-center justify-center">
            <div className="flex items-center gap-4">
              <CircularSlider
                label="0"
                labelColor="#FEBF00"
                knobColor="#FEBF00"
                labelFontSize={".001rem"}
                progressColorFrom="#FEBF00"
                progressColorTo="#FEBF00"
                progressSize={8}
                trackColor="#eeeeee"
                initialValue={50}
                max={100}
                width={100}
                hideKnobRing={false}
                trackSize={10}
                data={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                dataIndex={5}
                valueFontSize={"2rem"}
                onChange={(value) => {
                  console.log(value);
                }}
              />
              {/* Label next to the slider */}
              <p className="text-gray-700 text-sm font-semibold">
                Market Experiences
              </p>
            </div>
          </div>
        </div>

        {/* Tab Section */}
        <div className="lg:max-w-3xl">
          <div className="flex border-b border-red-600">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 font-medium font-inter ${
                  activeTab === tab
                    ? "border-b-2 bg-red-600 border-red-600 text-white"
                    : "text-gray-800"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="pt-8">
            <h2 className="text-5xl leading-none text-gray-800 font-bebas">
              {tabs[activeTab].title}
            </h2>
            <p className="text-gray-600 mt-2">{tabs[activeTab].content}</p>

            {activeTab === "about" && (
              <div className="flex items-center gap-x-8 mt-7">
                <Button text={"ABOUT MORE"} />
                <p className="flex items-center font-roboto text-black font-bold">
                  <span className="mr-2">
                    <img src="phone.svg" alt="Phone Icon" />
                  </span>
                  +88 3426 739 485
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center mx-4 mt-[4.625rem] mb-20 ">
        <div className="flex items-center flex-grow gap-x-4">
          <div className="bg-white w-[5.625rem] rounded-full p-6 shadow-md">
            <img className="" src="package.svg" alt="" />
          </div>
          <div>
            <h3 className="lg:text-3xl text-2xl font-bebas mb-1">
              FAST DELIVERY
            </h3>
            <p className="lg:text-xl text-lg font-inter">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex items-center flex-grow gap-x-4">
          <div className="bg-white w-[5.625rem] rounded-full p-6 shadow-md">
            <img className="" src="medal.svg" alt="" />
          </div>
          <div>
            <h3 className="lg:text-3xl text-2xl font-bebas mb-1">
              ABSOLUTE DINING
            </h3>
            <p className="lg:text-xl text-lg font-inter">
              Best buffet restaurant
            </p>
          </div>
        </div>
        <div className="flex items-center flex-grow gap-x-4">
          <div className="bg-white w-[5.625rem] rounded-full p-6 shadow-md">
            <img className="" src="bag.svg" alt="" />
          </div>
          <div>
            <h3 className="lg:text-3xl text-2xl font-bebas mb-1">
              PICKUP DELIVERY
            </h3>
            <p className="lg:text-xl text-lg font-inter">
              Grab your food order
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
