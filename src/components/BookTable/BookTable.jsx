import Button from "../shared/Button/Button";
import "./BookTable.css";

const BookTable = () => {
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      date: form.date.value,
      numberOfPeople: form.numberOfPeople.value,
      message: form.message.value,
    };

    console.log(formData);
  };

  return (
    <div
      className="h-screen w-full container mx-auto bg-cover"
      style={{
        backgroundImage: "url('fork.jpg')",
      }}
    >
      <div className="max-w-xl p-8 text-white">
        <p className="text-lg font-roboto text-Red font-bold flex items-center">
          <span className="inline-block w-3 h-3 bg-Red mr-2 rounded-sm"></span>
          Book Now
        </p>
        <h1 className="text-[3.875rem] mb-4 font-bebas">BOOK YOUR TABLE</h1>
        <p className="text-[#F7F8F9] mb-6 font-roboto">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
        <form onSubmit={handleBookingSubmit} className="space-y-4 font-roboto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className="w-full p-3 border border-white bg-transparent text-white placeholder-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-white bg-transparent text-white placeholder-white"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              className="w-full p-3 border border-white bg-transparent text-white placeholder-white"
              required
              style={{
                colorScheme: "dark",
              }}
            />

            <input
              type="number"
              name="numberOfPeople"
              placeholder="Total People"
              className="w-full p-3 border border-white bg-transparent text-white placeholder-white"
              min="1"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            className="w-full p-3 border border-white bg-transparent text-white placeholder-white"
            rows="4"
          ></textarea>
          <Button text={"BOOK NOW"} />
        </form>
      </div>
    </div>
  );
};

export default BookTable;