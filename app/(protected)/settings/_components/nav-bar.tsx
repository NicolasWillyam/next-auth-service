"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UserButton from "@/components/auth/user-button";
import { LanguageDropDownMenu } from "@/components/lang/language-drop-down-menu";
const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-hover flex justify-between items-center p-2.5 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button variant={pathname === "/server" ? "default" : "outline"}>
          <Link href="/settings">Server</Link>
        </Button>
        <Button variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href="/settings">Admin</Link>
        </Button>
        <Button variant={pathname === "/client" ? "default" : "outline"}>
          <Link href="/settings">Client</Link>
        </Button>
        <Button variant={pathname === "/settings" ? "default" : "outline"}>
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};

export default NavBar;
