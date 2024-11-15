const PointTitle = ({ children }) => {
  return (
    <p className="text-lg font-roboto text-Red font-bold flex items-center">
      <span className="inline-block w-3 h-3 bg-Red mr-2 rounded-sm"></span>
      {children}
    </p>
  );
};

export default PointTitle;
