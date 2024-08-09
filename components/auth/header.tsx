import React from "react";
import { RxNotionLogo } from "react-icons/rx";
interface HeaderProps {
  label: string;
}
const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full  flex flex-col items-start">
      <p className="text-2xl  font-semibold leading-[28px]">
        Bring your ideas to life.
      </p>
      <p className="text-2xl text-black/30 leading-[28px] font-semibold">
        {label}
      </p>
    </div>
  );
};

export default Header;
