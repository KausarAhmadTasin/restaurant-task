import Button from "../shared/Button/Button";

const Navbar = () => {
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
  return (
    <div className="bg-Red py-8 text-white">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-[0.375rem]">
          <img className="h-[2.3125rem]" src="logo.svg" alt="" />
          <h2 className="text-[1.77775rem]">
            <span className="font-semibold">Restau</span>rant
          </h2>
        </div>
        <img src="pizza.png" className="h-7" alt="" />
        <div>
          <ul className="flex items-center gap-x-10 font-medium text-base">
            {navLinks.map((navLink) => (
              <li key={navLink.path}>{navLink.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <Button>BOOK A TABLE</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
