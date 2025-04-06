"use client";

// @components
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// @ui components
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="w-full container mx-auto sm:flex items-center hidden justify-between">
        <Link href="#">
          <Image
            src="/logo.svg"
            alt="logo"
            height={100}
            width={100}
            className="size-12"
          />
        </Link>
        <Button size="sm">
          Sign In
        </Button>
      </div>
      <Sheet>
        <div className="sm:hidden flex w-full justify-between px-8">
          <Link href="#">
            <Image
              src="/logo.svg"
              alt="logo"
              height={100}
              width={100}
              className="size-12"
            />
          </Link>
          <SheetTrigger asChild>
            <Button size="sm">
              Sign In
            </Button>
          </SheetTrigger>
        </div>
      </Sheet>
    </div>
  );
}
