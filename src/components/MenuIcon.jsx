import { Menu } from "lucide-react";

const MenuIcon = ({ showSideMenu, setShowSideMenu }) => {
  const handleSideMenu = () => {
    const showingMenu = !showSideMenu;
    setShowSideMenu(showingMenu);
  };

  return (
    <div onClick={handleSideMenu}>
      <Menu
        size={40}
        color="#000"
        strokeWidth={2.5}
        className={`transition-transform duration-300 ${showSideMenu ? "rotate-90" : "rotate-0"}`}
      />
    </div>
  );
};

export default MenuIcon;
