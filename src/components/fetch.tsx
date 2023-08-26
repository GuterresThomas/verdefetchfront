'use client'
import { useEffect, useState } from "react";

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
        <div>
            <ul>
                {dataBases.map((database) => (
                <li key={database.table_name}>
                    <div>{database.table_name}</div>
                </li>
                ))}
            </ul>
        </div>
    )
}