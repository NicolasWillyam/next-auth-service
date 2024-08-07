import React from "react";
import { RxNotionLogo } from "react-icons/rx";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";

const NavHeader = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between max-w-[1300px] px-5 mx-auto">
      <div className="flex items-center gap-4">
        <RxNotionLogo size={30} />
        <div className="text-white/20">|</div>
        <div className="flex items-center gap-2">
          <AiOutlineGlobal size={16} />
          <p className="text-sm">English</p>
          <FaChevronDown size={12} />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
