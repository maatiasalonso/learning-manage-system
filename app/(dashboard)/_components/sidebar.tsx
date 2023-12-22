import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-zinc-50 shadow-sm">
      <section className="p-6">
        <Logo />
      </section>
      <section className="flex flex-col w-full">
        <SidebarRoutes />
      </section>
    </div>
  );
};
