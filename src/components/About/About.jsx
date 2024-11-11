import { useState } from "react";
import Button from "../shared/Button/Button";

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
    <div className="container mx-auto py-[7.5rem] px-5 flex gap-x-20 items-start">
      <div>
        <img className="max-w-[38.5625rem]" src="burger.png" alt="Burger" />
      </div>
      <div>
        <div className="max-w-3xl mx-auto">
          <div className="flex border-b border-Red">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 font-medium font-inter ${
                  activeTab === tab
                    ? "border-b-2 bg-Red border-Red text-white"
                    : "text-[#333]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="pt-8">
            <h2 className="text-[3.875rem] leading-none text-gray-800 font-bebas">
              {tabs[activeTab].title}
            </h2>
            <p className="text-gray-600 mt-2">{tabs[activeTab].content}</p>

            {/* Only show the button and contact info for the "About" tab */}
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
    </div>
  );
};

export default About;
