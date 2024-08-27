import React from "react";
import Image from "next/image";
import { ModeToggle } from "./Toggle";

export default function Navbar() {

    return (
        <div className="sticky top-0 z-50  w-full  backdrop-filter backdrop-blur-3xl">
            <div className="px-10 flex justify-between items-center max-width:100% border-b-[1px]">
                <div className="text-2xl font-bold">
                    {/* logo image here */}
                    {/* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
                    {/* <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
                    <Image src="/white.png" className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" alt="logo" width={150} height={150} />
                    <Image src="/dark.png" className=" rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" alt="logo" width={150} height={150} />
                </div>
                <div className="flex space-x-4">
                    <a href="#home" className="text-lg pt-1 dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">Бидний тухай</a>
                    <a href="#product" className="text-lg pt-1 dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">Бүтээгдэхүүн</a>
                    <a href="#price" className="text-lg pt-1 dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">Үнэ</a>
                    <a href="#contact" className="text-lg pt-1 dark:text-gray-500 text-balck hover:text-gray-300 dark:hover:text-white">Холбоо барих</a>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}