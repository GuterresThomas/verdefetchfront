'use client'
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function AddForm() {
    const [tabela, setTabelas] = useState([])
    const [newTable, setNewTable] = useState({
        nome:'',
    })

    const fetchTables = async () => {
        const response = await fetch('http://localhost:3000/databases')
        const data = await response.json()
        setTabelas(data)
    }

    const addTable =async () => {
        console.log(newTable)
        const response = await fetch('http://localhost:3000/databases/insert', {
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
            fetchTables()
        }     
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addTable();
        alert('Tabela adicionada')
        console.log(newTable)
        
        
    }   
    
    useEffect(() => {
        fetchTables()
    }, [])

    return (
        <div className="flex flex-col justify-center  p-4 bg-sky-100 rounded-xl h-screen">
            <ScrollArea>
                <div>
                    <span className="font-bold p-2 m-2">Adicionar Tabela:</span>
                </div>
                <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-2 p-2 ">
                    <label htmlFor="nome">Nome da tabela:</label>
                    <input className="bg-sky-50 rounded-xl p-1 w-full hover:bg-sky-200" type="text" id="nome" name="nome" value={newTable.nome} onChange={(e) => setNewTable({ ...newTable, nome: e.target.value })} />
                    
                    
                    
                    <button type="submit" className="bg-sky-50 p-3 font-bold rounded-xl hover:bg-sky-200 m-2">Adicionar Tabela</button>
                </form>
            </ScrollArea>
        </div>
        
    )
}