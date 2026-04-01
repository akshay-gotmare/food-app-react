import { Utensils } from "lucide-react";

const Header = () => {
  const navItems = ["Home", "About", "Contact"];

  return (
    <div className="flex justify-center text-xs md:text-sm lg:text-lg">
      <div className="flex justify-between items-center flex-wrap bg-white/60 h-25 w-[98%] px-6 rounded-full mt-3">
        <div className="flex items-center justify-between gap-5 flex-wrap shrink-0">
          <p className="rotate-20 text-teal-700">
            <Utensils className="md:size-12 lg:size-15" strokeWidth={1.5} />
          </p>
          <div className="w-30 text-xs md:text-sm lg:text-lg">
            <h3 className="font-bold text-lg">Knife N Fork</h3>
            <code className="text-sm">Way you eat</code>
          </div>
        </div>
        <div className="flex justify-between items-center sm:gap-0 md:gap-2 lg:gap-6">
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
        <button className="mr-3 px-8 py-2 bg-green-400 rounded hover:scale-93 transition-transform duration-100">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
