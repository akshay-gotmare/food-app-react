const ResMenuItems = ({ item }) => {
  return (
    <div className="px-5 py-2 flex justify-between">
      <div className="w-3/4">
        <p className="font-semibold text-sm">{item.name}</p>
        <p className="text-gray-600 text-xs">{item.description}</p>
      </div>
      <div className="w-1/4 flex gap-2 items-center justify-center"><button className="py-1 bg-black w-1/4 text-white rounded-md font-bold">-</button>0<button className="py-1 bg-black w-1/4 text-white rounded-md font-bold">+</button></div>
    </div>
  );
};

export default ResMenuItems;
