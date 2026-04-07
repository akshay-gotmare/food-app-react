import { Menu, ShoppingCart, Utensils } from "lucide-react";
import MenuIcon from "./MenuIcon";
import NavItems from "./NavItems";

const Header = ({ showSideMenu, setShowSideMenu }) => {
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
        <NavItems />
        <span className="flex justify-between items-center gap-2 mr-3 px-4 py-2 rounded-full select-none cursor-pointer">
          {/* Cart */}
          <span className="flex items-center hover:scale-93 transition-transform duration-100">
            <ShoppingCart
              size={30}
              color="#000"
              //   strokeWidth={2.5}
              //   color="#fff"
              strokeWidth={2}
              absoluteStrokeWidth
              fill="green"
            />
            <span className="bg-green-500 px-1 text-xs mb-5 rounded-full text-white">
              0
            </span>
          </span>
          <MenuIcon
            showSideMenu={showSideMenu}
            setShowSideMenu={setShowSideMenu}
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
