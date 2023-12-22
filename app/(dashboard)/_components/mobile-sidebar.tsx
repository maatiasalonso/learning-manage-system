"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="md:hidden pr-4 opacity-70 transition">
          <Menu className="hover:cursor-pointer" />
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0 bg-zinc-50">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};
