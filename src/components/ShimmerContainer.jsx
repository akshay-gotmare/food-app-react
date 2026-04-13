import { useMemo } from "react";
import ShimmerCard from "./ShimmerCard";

const ShimmerContainer = () => {
  const shimmersCount = 20;

  const shimmerItems = useMemo(() =>
    Array.from({ length: shimmersCount }, (_, index) => (
      <ShimmerCard key={index} />
    )),
  );

  return (
    <div className="flex flex-wrap justify-center gap-8">{shimmerItems}</div>
  );
};
export default ShimmerContainer;
