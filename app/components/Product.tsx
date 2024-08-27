import React from "react";
import Image from "next/image";

export default function Product({logosvg, title, desciption}: {logosvg: any,title: string, desciption: string}) {
   
    return (
        <div className="p-4 px-6 flex max-width:100% border-2 rounded-xl">
            <div className="pt-2 w-10 h-10">
                {logosvg}
            </div>
            <div className="pl-5">
                <div className="font-bold text-xl">{title}</div>
                <p className="text-sm">{desciption}</p>
            </div>
        </div>
    )
}