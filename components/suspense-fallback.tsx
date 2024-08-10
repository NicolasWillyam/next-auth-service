import React, { Suspense } from "react";
import LoadingFallback from "./loading-fallback";
import { ReactNode } from "react";
import { Spinner } from "./spinner";

interface SuspenseFallbackProps {
  children: ReactNode;
}

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ children }) => {
  return (
    <Suspense fallback={<Spinner className="text-black" />}>
      {children}
    </Suspense>
  );
};

export default SuspenseFallback;
