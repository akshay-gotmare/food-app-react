import { useState } from "react";
import ResMenuItems from "./ResMenuItems";

const CategoryAccordion = ({ menu, setOpenIndex, openIndex, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { category, items } = menu;

  const handleClick = () => {
    console.log(index);
    // setIsOpen(!isOpen);
    setOpenIndex();
  };
  return (
    <div className="w-1/2 mx-auto bg-amber-100">
      <div
        className="flex justify-between px-5 py-2 my-1 shadow-sm  cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="font-bold">{category}</h1>
        <span>{openIndex === index ? "➖" : "➕"}</span>
      </div>
      {openIndex === index && (
        <div>
          {items.map((item) => (
            <ResMenuItems item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryAccordion;
