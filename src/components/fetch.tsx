'use client'
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function Fetchs() {
    const [dataBases, setDataBases] = useState([])

    const fetchDataBases = async () => {
        const response = await fetch ('http://localhost:3000/databases')
        const data = await response.json()
        setDataBases(data)
        console.log(data)
    }

    

    useEffect(() => {
      fetchDataBases()
    }, [])
    

    return (
        <div className="flex flex-col justify-center">
            <ul>
                {dataBases.map((database) => (
                <li key={database.table_name}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{database.table_name}</AccordionTrigger>
                            <AccordionContent>
                                <div>{database.table_type}</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                </li>
                ))}
            </ul>
        </div>
    )
}