import { useState } from "react";
import RatingsButton from "./RatingsButton";
import Search from "./Search";

const Filter = ({
  restaurants,
  filteredRestaurants,
  setFilteredRestaurants,
}) => {
  const [isRated, setIsRated] = useState(false);

  const handleFilter = () => {
    const clicked = !isRated;
    setIsRated(clicked);

    const filteredData = clicked
      ? filteredRestaurants.length > 0
        ? filteredRestaurants.filter(
            (restaurant) => restaurant.info.avgRating >= 4.5,
          )
        : restaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5)
      : restaurants;
    setFilteredRestaurants(filteredData);
  };

  return (
    <div className="flex justify-around items-center mb-8 px-10 mx-8">
      <RatingsButton onClick={handleFilter} isRated={isRated} />
      <Search
        restaurants={restaurants}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
    </div>
  );
};

export default Filter;
