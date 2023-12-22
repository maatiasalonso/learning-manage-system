"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Minus } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive =
    (pathName === "/" && href === "/") ||
    pathName === href ||
    pathName.startsWith(`${href}/`);

  const handleClick = () => {
    router.push(href);
  };

  return (
    <>
      <Button
        variant="ghost"
        className={cn(
          "flex items-center gap-x-2 text-zinc-500 text-sm font-[500] pl-6 transition-all hover:text-zinc-600 hover-bg-zinc-300/20 justify-start",
          isActive &&
            "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
        )}
        onClick={handleClick}
      >
        <Icon size={22} className="mr-2 w-4 h-4" />
        {label}
        {isActive && (
          <Minus className="w-16 h-10 text-sky-700 ml-auto absolute right-0 rotate-90 -mr-7" />
        )}
      </Button>
    </>
  );
};
