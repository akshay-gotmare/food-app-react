import { useEffect, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { Outlet } from "react-router";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const swiggyApi =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0977049&lng=79.1294516&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(swiggyApi);
      const data = await response.json();
      setRestaurants(
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-amber-200 gap-5 relative">
        <Header showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
        <Outlet context={restaurants} />
        <Footer />
      </div>
      {showSideMenu && (
        <div className="absolute top-30 right-8 transition-transform duration-100">
          <SideMenu />
        </div>
      )}
    </div>
  );
};

export default App;
