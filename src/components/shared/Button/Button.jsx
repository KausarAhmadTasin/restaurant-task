const Button = ({ children }) => {
  return (
    <button className="bg-Yellow px-6 py-[0.625rem] text-text-primary font-bold active:scale-95">
      {children}
    </button>
  );
};

export default Button;
