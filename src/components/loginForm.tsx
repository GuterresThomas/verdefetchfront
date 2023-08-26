'use client'
import React, { useState } from 'react';
import Link from "next/link"

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');


  const handleLogin = async (id) => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, senha }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Link href="/list"> <button onClick={handleLogin}>Login</button></Link>
      <p>{message}</p>
    </div>
  );
}