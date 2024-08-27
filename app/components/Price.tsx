import React from "react";
import Image from "next/image";

interface Items {
            itemName: string,
}
interface MainItems {
    title: string,
    items: Items[]
}
export default function Price(
    {title, item, month}: 
    {   
        title: string, 
        item: MainItems[]
        month: string
    }) {
   
    return (
        <div className="p-4 px-6  max-width:100% border-2 rounded-xl">
            <div className="pl-5 grid grid-cols-1">
                <div className="font-bold text-3xl">{title}</div>
                <div className="pb-5 font-bold  text-xl">₮</div>
                <div className="pl-4">
                    {item.map((item, index) => (
                        <div key={index}>
                            <div className="flex">
                                <div>
                                    <svg className="w-5 h-5"xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                                    <path className="stroke-black dark:stroke-white stroke-[2px]" d="M4 12.6111L8.92308 17.5L20 6.5"  strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="font-bold text-lg pl-2 pb-2">{item.title}</div>
                            </div>
                            <div className="pl-4">
                                {item.items.map((item, index) => (
                                    <div key={index} className="flex justify-between">
                                        <div className="flex">
                                            <div>
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="none">
                                                <path className="stroke-black dark:stroke-white stroke-[2px]" d="M6 12L18 12"  strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <div className="pl-2">{item.itemName}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="align-end self-end justify-end  place-self-end m-4 rounded-full w-[80%] text-center font-bold text-xl bg-black text-white dark:bg-white dark:text-black">
                    <div className="p-2 px-5">{month} MONTH</div>
                </div> */}
                <div className="flex">
                    <svg className="w-5 h-5 dark:fill-white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"><path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"/></svg>
                    <div className="pb-5 font-bold text-xl, pl-2">
                        {month} MONTHS
                    </div>
                </div>
            </div>
        </div>
    )
}