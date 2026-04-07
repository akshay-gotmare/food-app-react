const NavItems = () => {
  const navItems = ["Home", "About", "Contact"];

  return (
    <div className="sm:flex sm:flex-row sm:items-center sm:gap-2 md:gap-4 lg:gap-6">
      {navItems.map((item, index) => {
        return (
          <span
            key={index}
            className="bg-black px-5 py-2 rounded-full font-semibold text-white hover:scale-93 transition-transform duration-100"
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default NavItems;
