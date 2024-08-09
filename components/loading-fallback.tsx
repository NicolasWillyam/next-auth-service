import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingFallback = () => {
  return <BeatLoader className="text-destructive" size={8} margin={4} />;
};

export default LoadingFallback;
