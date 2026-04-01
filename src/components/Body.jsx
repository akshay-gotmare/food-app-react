import { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";

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
      <div className="flex flex-wrap justify-center gap-8 ">
        {filteredRestaurants?.length > 0 &&
          filteredRestaurants.map((restaurant) => (
            <div key={restaurant?.info?.id}>
              <Card info={restaurant.info} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Body;
