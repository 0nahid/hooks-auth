import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <h1>Please Login here</h1>
            <button>Login With Google</button>
            <Link to="/register">New user?</Link>
        </div>
    )
}
