import { useState } from "react";
import CategoryAccordion from "./CategoryAccordion";

const MENU = [
  {
    category: "Popular Dishes",
    items: [
      {
        id: 101,
        name: "Classic Cheeseburger",
        description:
          "Juicy beef patty with cheddar, lettuce, and secret sauce.",
        price: 12.99,
        image: "cheeseburger.jpg",
        isVegetarian: false,
      },
      {
        id: 102,
        name: "Truffle Fries",
        description: "Crispy golden fries tossed in truffle oil and parmesan.",
        price: 6.5,
        image: "truffle-fries.jpg",
        isVegetarian: true,
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        id: 201,
        name: "Iced Caramel Latte",
        description:
          "Double shot of espresso with creamy milk and caramel drizzle.",
        price: 4.95,
        image: "iced-latte.jpg",
        isVegetarian: true,
      },
      {
        id: 202,
        name: "Fresh Lemonade",
        description: "Hand-pressed lemons with a hint of mint.",
        price: 3.5,
        image: "lemonade.jpg",
        isVegetarian: true,
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        id: 301,
        name: "Grilled Atlantic Salmon",
        description: "Served with asparagus and a lemon butter sauce.",
        price: 22.0,
        image: "salmon.jpg",
        isVegetarian: false,
      },
      {
        id: 302,
        name: "Wild Mushroom Risotto",
        description: "Creamy arborio rice with porcini and herbs.",
        price: 18.5,
        image: "risotto.jpg",
        isVegetarian: true,
      },
    ],
  },
  {
    category: "Appetizers",
    items: [
      {
        id: 401,
        name: "Buffalo Wings",
        description: "Spicy wings served with blue cheese dip.",
        price: 11.0,
        image: "wings.jpg",
        isVegetarian: false,
      },
      {
        id: 402,
        name: "Crispy Calamari",
        description: "Lightly breaded with a side of marinara.",
        price: 13.0,
        image: "calamari.jpg",
        isVegetarian: false,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: 501,
        name: "Molten Lava Cake",
        description: "Warm chocolate cake with a gooey center.",
        price: 8.99,
        image: "lava-cake.jpg",
        isVegetarian: true,
      },
      {
        id: 502,
        name: "New York Cheesecake",
        description: "Classic creamy cheesecake with strawberry topping.",
        price: 7.5,
        image: "cheesecake.jpg",
        isVegetarian: true,
      },
    ],
  },
];

const RestaurantMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="min-h-[80lvh]">
      <div> Restaurant Name</div>
      <div>
        {MENU.map((menu, index) => (
          <CategoryAccordion
            key={index}
            menu={menu}
            setOpenIndex={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            openIndex={openIndex}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
