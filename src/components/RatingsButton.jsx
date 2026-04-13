const RatingsButton = ({ onClick, isRated }) => {
  return (
    <div className="w-1/3 px-6">
      <button
        className="w-40 bg-amber-100 px-3 py-1 rounded-xl font-semibold text-lg hover:scale-93 transition-transform duration-100 active:scale-85"
        onClick={onClick}
      >
        {isRated ? "Show All" : "Ratings 4.5+"}
      </button>
    </div>
  );
};

export default RatingsButton;
