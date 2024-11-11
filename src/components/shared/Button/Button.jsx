const Button = ({ text }) => {
  return (
    <button className="bg-Yellow px-6 py-[0.625rem] text-text-primary font-bold font-roboto active:scale-95">
      {text}
    </button>
  );
};

export default Button;
