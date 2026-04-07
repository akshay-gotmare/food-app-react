import { useEffect, useState } from "react";
import Filter from "./Filter";
import CardsContainer from "./CardsContainer";

const Body = ({ restaurants }) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  return (
    <div className="flex flex-col w-full h-full rounded-t-xl px-8 py-4 grow">
      <Filter
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <CardsContainer filteredRestaurants={filteredRestaurants} />
    </div>
  );
};

export default Body;
