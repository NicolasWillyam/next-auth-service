import React, { Suspense } from "react";
import LoadingFallback from "./loading-fallback";
import { ReactNode } from "react";
import { Spinner } from "./spinner";

interface SuspenseFallbackProps {
  children: ReactNode;
}

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

export default SuspenseFallback;
