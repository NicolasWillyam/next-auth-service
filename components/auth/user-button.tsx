"use client";

import * as React from "react";
import {
  AvatarIcon,
  CaretSortIcon,
  CheckIcon,
  ExitIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogoutButton } from "./logout-button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaChevronDown, FaUser } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { useCurrentUser } from "@/hooks/use-current-user";

const UserButton = () => {
  const user = useCurrentUser();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger>
    //     <Avatar>
    //       <AvatarImage src={user?.image || ""} />
    //       <AvatarFallback className="bg-link text-white">
    //         <FaUser size={16} />
    //       </AvatarFallback>
    //     </Avatar>
    //   </DropdownMenuTrigger>

    //   <DropdownMenuContent
    //     className="w-40 bg-white shadow-xl border rounded-sm"
    //     align="end"
    //   >
    //     <LogoutButton>
    //       <DropdownMenuItem>Logout</DropdownMenuItem>
    //     </LogoutButton>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex gap-2.5 items-center">
            <p className="text-sm">Hi, {user?.name}</p>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={open}
              className="w-fit justify-between gap-1.5 p-2 h-8 bg-black/10 rounded-full border-hover text-black/50"
            >
              <FaUser size={16} />
            </Button>
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-40 p-0 rounded-xl " align="end">
          <div className="bg-white p-1 rounded-md">
            <LogoutButton>
              <div className="text-sm px-2.5 py-1.5 rounded-sm hover:bg-hover duration-300 flex items-center gap-2">
                <ExitIcon />
                Logout
              </div>
            </LogoutButton>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserButton;
