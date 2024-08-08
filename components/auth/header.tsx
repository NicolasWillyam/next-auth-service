import React from "react";
import { RxNotionLogo } from "react-icons/rx";
interface HeaderProps {
  label: string;
}
const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full  flex flex-col gap-y-5 items-center">
      <div className="w-14 h-14 rounded-[10px] bg-white flex items-center justify-center text-black">
        <RxNotionLogo size={44} />
      </div>
      <p className="text-xl text-white">{label}</p>
    </div>
  );
};

export default Header;
