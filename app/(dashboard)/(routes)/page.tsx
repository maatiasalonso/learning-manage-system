import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <Button>Click Me!</Button>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
