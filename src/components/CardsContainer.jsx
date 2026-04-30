import { Link } from "react-router";
import Card from "./Card";

const CardsContainer = ({ filteredRestaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 ">
      {filteredRestaurants?.length > 0 &&
        filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`restaurant/${restaurant?.info?.id}`}
          >
            <Card info={restaurant.info} />
          </Link>
        ))}
    </div>
  );
};

export default CardsContainer;
