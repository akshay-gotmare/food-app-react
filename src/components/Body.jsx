import { useEffect, useState } from "react";
import Filter from "./Filter";
import CardsContainer from "./CardsContainer";
import ShimmerContainer from "./ShimmerContainer";
import { useOutletContext } from "react-router";

const Body = () => {
  const restaurants = useOutletContext();
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  return (
    <div className="flex flex-col w-full h-full rounded-t-xl px-8 py-4 grow">
      <Filter
        restaurants={restaurants}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      {filteredRestaurants?.length > 0 ? (
        <CardsContainer filteredRestaurants={filteredRestaurants} />
      ) : (
        <ShimmerContainer />
      )}
    </div>
  );
};

export default Body;
