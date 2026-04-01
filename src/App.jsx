import { useEffect, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  const swiggyApi =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5883095&lng=73.80073399999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(swiggyApi);
      const data = await response.json();
      console.log(data);
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
      <div className="flex flex-col min-h-screen bg-amber-200 gap-5">
        <Header />
        <Body restaurants={restaurants} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
