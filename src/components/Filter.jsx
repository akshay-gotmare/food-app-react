import { useState } from "react";

const Filter = ({ restaurants, setFilteredRestaurants }) => {
  const [isRated, setIsRated] = useState(false);

  const handleFilter = () => {
    const clicked = !isRated;
    setIsRated(clicked);

    const filteredData = clicked
      ? restaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5)
      : restaurants;
    setFilteredRestaurants(filteredData);
  };

  return (
    <div className="flex justify-around items-center mb-8 ">
      <button
        className="bg-amber-100 px-3 py-1 rounded-xl font-semibold text-lg hover:scale-93 transition-transform duration-100 active:scale-85"
        onClick={handleFilter}
      >
        {isRated ? "Show All" : "Ratings 4.5+"}
      </button>
      <div className="bg-red-200">{isRated ? "true" : "False"}</div>
    </div>
  );
};

export default Filter;
