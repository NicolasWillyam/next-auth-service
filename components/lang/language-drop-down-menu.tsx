"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaChevronDown } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

const frameworks = [
  {
    value: "english",
    label: "English",
    subLabel: "English(US)",
  },
  {
    value: "vietnamese",
    label: "Việt Nam",
    subLabel: "Vietnamese(VN)",
  },
  {
    value: "chinese",
    label: "中国人",
    subLabel: "Chinese",
  },
  {
    value: "japanese",
    label: "日本語",
    subLabel: "Japanese",
  },
  {
    value: "korean",
    label: "한국인",
    subLabel: "Korean",
  },
];

export function LanguageDropDownMenu() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-between gap-1.5 p-2 h-8"
        >
          <AiOutlineGlobal size={16} />
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "English"}
          <FaChevronDown size={10} />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-56 p-0 rounded-lg ">
        <Command>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="flex flex-col">
                    {framework.label} <br />
                    <p className="text-destructive text-xs">
                      {framework.subLabel}
                    </p>
                  </div>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
