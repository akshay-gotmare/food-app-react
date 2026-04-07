import Card from "./Card";

const CardsContainer = ({ filteredRestaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 ">
      {filteredRestaurants?.length > 0 &&
        filteredRestaurants.map((restaurant) => (
          <div key={restaurant?.info?.id}>
            <Card info={restaurant.info} />
          </div>
        ))}
    </div>
  );
};

export default CardsContainer;
