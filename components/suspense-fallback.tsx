import React, { Suspense } from "react";
import LoadingFallback from "./loading-fallback";
import { ReactNode } from "react";

interface SuspenseFallbackProps {
  children: ReactNode;
}

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ children }) => {
  return <Suspense fallback={<></>}>{children}</Suspense>;
};

export default SuspenseFallback;
