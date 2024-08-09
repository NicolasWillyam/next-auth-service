import React from "react";
import { RxNotionLogo } from "react-icons/rx";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import { LanguageDropDownMenu } from "../lang/language-drop-down-menu";

const NavHeader = () => {
  return (
    <div className="w-full absolute">
      <div className="h-20 flex items-center justify-between max-w-[1300px] px-5 mx-auto">
        <div className="flex items-center">
          <Link href={"/"}>
            <RxNotionLogo size={32} className="mr-2.5" />
          </Link>
          <div className="text-black/20">|</div>
          <LanguageDropDownMenu />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
