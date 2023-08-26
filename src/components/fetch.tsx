'use client'
import { useEffect, useState } from "react";

export default function Fetchs() {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch ('')
        const data = await response.json()
        setPosts(data)
        console.log(data)
    }

    useEffect(() => {
      fetchPosts()
    }, [])
    

    return (
        <div>
            {posts.map((post) => (    
                <li key={post.id}>
                    <ul>{post.title}</ul>
                    <ul> {post.body}</ul>
                </li>
            ))}
        </div>
    )
}