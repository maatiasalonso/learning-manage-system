import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <section className="h-20 md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </section>
      <section className="hidden md:flex h-full w-56 flex-col fixed inset-y-0">
        <Sidebar />
      </section>
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
