import React from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Product({logosvg, title, desciption, longDescription}: {logosvg: any,title: string, desciption: string, longDescription:any}) {
   
    return (
        <div className="p-4 px-6 max-width:100% border-2 rounded-xl">
            <Dialog >
                <DialogTrigger>
                <div className="flex items-start max-width:100%">
                    <div className="pt-2 w-10 h-10">
                        {logosvg}
                    </div>
                    <div className="pl-5">
                        <div className="font-bold text-xl text-start">{title}</div>
                        <p className="text-sm text-justify">{desciption}</p>
                    </div>
                    
                    
                </div>
                </DialogTrigger>
                
                <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
                    
                        <DialogHeader>
                        
                        <div className="flex items-start">
                            <div className="pt-2 w-10 h-10">
                                {logosvg}
                            </div>
                            <div className="pl-5">
                                <DialogTitle className="pb-2">{title}</DialogTitle>
                                <DialogDescription>
                                    {longDescription}
                                </DialogDescription>
                            </div>
                        </div>
                        </DialogHeader>
                </DialogContent>
                
            </Dialog>
        </div>
    )
}