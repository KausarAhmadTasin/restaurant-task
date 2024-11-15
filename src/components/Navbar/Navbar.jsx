import { useState } from "react";
import Button from "../shared/Button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Client",
      path: "/clinet",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="fixed w-full top-0 z-40 bg-Red px-4 py-8 text-white">
      <nav className="container z-40 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-16">
          {" "}
          {/* Logo */}
          <div className="flex items-center gap-x-[0.375rem]">
            <img className="h-[2.3125rem]" src="logo.svg" alt="" />
            <h2 className="text-[1.77775rem]">
              <span className="font-semibold font-poppins">Restau</span>rant
            </h2>
          </div>
          <img src="pizza.png" className="h-7" alt="" />
          {/* Desctop Links */}
          <div>
            <ul className="md:flex hidden items-center gap-x-10 font-medium text-base">
              {navLinks.map((navLink) => (
                <li key={navLink.path}>{navLink.title}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Drawer */}
        <RxHamburgerMenu
          onClick={handleToggleDrawer}
          className="md:hidden font-bold text-2xl cursor-pointer"
        />
        <div className="z-50 hidden md:block">
          <Button text={"BOOK A TABLE"} />
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-red-700 text-white transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex flex-col h-full">
            {/* Close Icon */}
            <div className="flex justify-end">
              <FaTimes
                onClick={handleToggleDrawer}
                className="text-2xl cursor-pointer"
              />
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-y-6 mt-8 text-lg font-medium">
              {navLinks.map((navLink) => (
                <li key={navLink.path} className="hover:underline">
                  <a href={navLink.path} onClick={handleToggleDrawer}>
                    {navLink.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Drawer Button */}
            <div className="mt-auto">
              <Button text={"BOOK A TABLE"} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
