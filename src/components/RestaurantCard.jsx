import { useEffect, useState } from "react";
import { useParams } from "react-router";

const RestaurantCard = () => {
  const [resData, setResData] = useState([]);
  const { id } = useParams();

  const fetchRestaurantData = async () => {
    try {
      const swiggyApiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.0977049&lng=79.1294516&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
      const response = await fetch(
        `http://localhost:5000/proxy?targetUrl=${encodeURIComponent(swiggyApiUrl)}`,
      );
      const json = await response.json();
      console.log("Here: ", json);
      console.log("Here: ", response);
      const resDetails = response?.data?.cards[2]?.card?.card?.info;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  console.log(id);
  return (
    <div>
      <h1>Restaurant name here</h1>
      <p>4 stars</p>
      <h3>Cuisines</h3>
      <p>Italian, Mexican</p>
      <p>Cost for two: $20</p>
    </div>
  );
};

export default RestaurantCard;
