import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-green-500/15 h-9 p-3 rounded-md flex items-center gap-x-2 text-sm text-green-500">
      <CheckCircledIcon className="w-3 h-3" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
