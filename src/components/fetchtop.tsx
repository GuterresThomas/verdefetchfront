'use client'
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function FetchTablesClients() {
    const [dataBases, setDataBases] = useState([])
    

    const fetchDataBases = async () => {
        const response = await fetch ('http://localhost:3000/databasesclientes')
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
                <li key={database.nome}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{database.nome}</AccordionTrigger>
                            <AccordionContent>
                                <div>
                                    <p>172.27.3.15:3000/databases/dinamicos</p>
                                    <p>
                                        tabela:{database.nome}
                                        </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
    
                    </li>
                ))}
            </ul>
        </div>   
    )
}