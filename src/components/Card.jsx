import { CircleStar, Dot } from "lucide-react";

const Card = ({ info }) => {
  const cloudinaryPrefixURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const {
    name,
    cloudinaryImageId,
    costForTwo,
    areaName,
    cuisines,
    avgRatingString,
    sla,
    aggregatedDiscountInfoV3,
  } = info;
  const slaString = sla.slaString;
  const header = aggregatedDiscountInfoV3?.header
    ? aggregatedDiscountInfoV3?.header
    : "";
  const subHeader = aggregatedDiscountInfoV3?.subHeader
    ? aggregatedDiscountInfoV3?.subHeader
    : "";
  const headerFinal =
    header && subHeader ? `${header} ${subHeader}` : costForTwo;

  return (
    <div className="flex justify-between flex-col bg-white/40 h-70 w-70 rounded-3xl overflow-hidden hover:scale-95 transition-transform duration-300 cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden h-1/2">
        <img
          src={`${cloudinaryPrefixURL + cloudinaryImageId}`}
          alt="food-item"
        />
        <div className="flex items-end absolute inset-0 h-full w-full bg-linear-to-t from-black/80 via-transparent to-transparent">
          <span className="text-white font-extrabold text-lg p-3">
            {headerFinal}
          </span>
        </div>
      </div>
      <div className="h-1/2 px-5 py-2">
        <h2 className="font-bold text-lg tracking-tighter truncate">{name}</h2>
        <div className="flex ">
          <CircleStar
            size={25}
            color="#fff"
            strokeWidth={2}
            absoluteStrokeWidth
            fill="green"
          />
          <span>{avgRatingString}</span>
          <Dot size={25} color="#000" strokeWidth={2} className="-mx-2" />
          <span className="font-semibold">{slaString}</span>
        </div>
        <div className="mt-2">
          <p className="text-gray-600 truncate">{cuisines.join(",")}</p>
          <p className="text-gray-600 truncate">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
