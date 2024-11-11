const Button = ({ text, py }) => {
  return (
    <button className="bg-Yellow px-6 py-[0.625rem] z-50 text-text-primary font-bold font-roboto active:scale-95">
      {text}
    </button>
  );
};

export default Button;
