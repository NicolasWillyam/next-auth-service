import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-red-500/15 h-9 p-3 rounded-md flex items-center gap-x-2 text-xs text-red-500">
      <ExclamationTriangleIcon className="w-3 h-3" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
