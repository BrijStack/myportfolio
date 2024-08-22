const MenuSvg = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible"
      width="40"
      height="12"
      viewBox="0 0 40 12"
    >
      <rect
        className="transition-all origin-center  duration-300"
        y={openNavigation ? "5" : "0"}
        width="40"
        height="2"
        rx="1"
        fill={`${openNavigation ? "black" : "white"}`}
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className="transition-all origin-center duration-300"
        y={openNavigation ? "5" : "10"}
        width="40"
        height="2"
        rx="1"
        fill={`${openNavigation ? "black" : "white"}`}
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
