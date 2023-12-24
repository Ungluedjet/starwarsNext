'use client'

import React, {useState} from "react"

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form>
            <text>Username</text>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <text>Password</text>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </form>
        </div>
    )
}