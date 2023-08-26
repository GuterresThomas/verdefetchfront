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
    const [tabela, setTabelas] = useState([])
    const [newTable, setNewTable] = useState({
        nome:'',
    })


    const fetchDataBases = async () => {
        const response = await fetch ('http://localhost:3000/databases')
        const data = await response.json()
        setDataBases(data)
        console.log(data)
    }

    const addTable = async () => {
        const response = await fetch('172.27.3.15:3000/databases/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTable),
        })
        if (response.status === 201) {
            setNewTable({
                nome: '',
                
                
            })
            fetchDatabases()
        }     
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTable();
        alert('Tabela adicionada')
        window.location.reload()
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
                                <button onClick={handleSubmit} value={database.table_name}>Adicionar Tabela</button>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                </li>
                ))}
            </ul>
        </div>
    )
}