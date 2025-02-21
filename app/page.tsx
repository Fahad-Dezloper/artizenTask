import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-primary">
      <div className="flex gap-4">
        
        <Link href={"/signin"}><Button>Sign In Page</Button></Link>
        <Link href={"/404"}><Button>404 Page</Button></Link>
        <Link href={"/dashboard"}><Button>Dashboard Page</Button></Link>
        </div>
    </div>
  );
}
