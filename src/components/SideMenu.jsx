import { CircleUser } from "lucide-react";

const SideMenu = () => {
  return (
    <div className="flex flex-col justify-between items-center py-3 bg-white h-40 w-40 rounded-xl">
      <div className="flex flex-col items-center h-4/5">
        <CircleUser size={40} color="#000" strokeWidth={1.5} />
        <span>Akshay Gotmare</span>
      </div>
      <button className="border px-3 py-1 rounded-xl text-sm font-bold hover:scale-93 transition-transform duration-100">
        Logout
      </button>
    </div>
  );
};

export default SideMenu;
