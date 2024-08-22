export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full  bg-white"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-white"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <SideLines />
    </div>
  );
};
