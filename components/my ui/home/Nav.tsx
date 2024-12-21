"use client";

import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ListIcon } from "lucide-react";

const NavBar = () => {
  return (
    <header className="fixed top-0 z-30 flex h-20 w-full items-center justify-center bg-transparent backdrop-blur-sm dark:bg-slate-900/[0.8]">
      <div className="flex flex-row items-center justify-start">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={48}
            height={48}
            className="mx-5"
          />
        </Link>
        <h1 className="font-Ubuntu text-xl font-semibold text-slate-900">
          <Link href={"/"}>Messenger Craft</Link>
        </h1>
      </div>
      <div className="ml-auto hidden space-x-5 px-5 md:block lg:block xl:block">
        <Button size={"default"} variant={"default"} className="py-5">
          Download
        </Button>
        <Button size={"default"} variant={"link"} className="text-slate-800">
          Get Started
        </Button>
      </div>
      <div className="ml-auto px-5 sm:block md:hidden lg:hidden xl:hidden">
        <Button variant={"ghost"} size={"icon"}>
          <ListIcon />
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
