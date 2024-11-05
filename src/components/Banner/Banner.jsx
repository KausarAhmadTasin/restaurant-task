import Button from "../shared/Button/Button";

const Banner = () => {
  return (
    <div className="bg-pattern bg-Red py-20">
      <div className="container mx-auto relative flex items-center justify-between px-8">
        {/* Left Section: Text Content */}
        <div className="text-left">
          <h1 className="text-white bg-Red p-10 w-[87rem] bg-gradient-to-r from-transparent to-Red/100 z-20 absolute opacity-65 top-6 left-0 font-bold text-[7.5rem] leading-[8.125rem] tracking-tighter mb-4">
            TASTE THE AUTHENTIC SAUDI CUISINE
          </h1>
          <p className="text-white text-lg mb-8">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <Button>Explore Menu</Button>
        </div>

        <div className="absolute inset-0 opacity-30 rounded-lg"></div>
        <img
          src="banner-img.png"
          className="max-h-[40.5625rem] max-w-[43.75rem]"
          alt="Delicious Saudi Cuisine"
        />
      </div>
    </div>
  );
};

export default Banner;
