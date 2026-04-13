import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = ({
  filteredRestaurants,
  setFilteredRestaurants,
  restaurants,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(() => (text ? text.trim() : ""));
  };

  const resInfoString = (info) => {
    const { name, cuisines, areaName } = info;
    // console.log([name, ...cuisines, areaName]);
    const infoString = [name, ...cuisines, areaName]
      .join("")
      .toLocaleLowerCase();
    // console.log(infoString);
    return infoString;
  };

  const resetRestaurants = () => setFilteredRestaurants(restaurants);

  const handleClick = () => {
    console.log(restaurants);
    if (searchText.length > 0 && filteredRestaurants.length > 0) {
      const searchedRestaurants = filteredRestaurants.filter(
        (restaurant, index) =>
          resInfoString(restaurant.info).includes(searchText.toLowerCase()),
      );
      setFilteredRestaurants(searchedRestaurants);
      setSearchText("");
      //   resetRestaurants();
    }
  };

  return (
    <div className="flex w-2/3">
      <div className="flex rounded-full px-4 h-full">
        <input
          className="h-10 w-90 bg-amber-100 rounded-l-full font-semibold text-lg px-4 outline-0"
          type="text"
          placeholder="What's your craving?"
          onInput={handleInput}
          value={searchText}
        />
        <button
          className="flex justify-center items-center w-11 outline-0 bg-white rounded-r-full pr-2 hover:scale-93 transition-transform duration-100 active:scale-85"
          onClick={handleClick}
        >
          <SearchIcon size={22} />
        </button>
      </div>
      <p>{searchText}</p>
    </div>
  );
};

export default Search;
