"use client"

import {signUp} from "@/app/actions/signup"
import { useActionState } from "react"

export default function SignUp () {
    const [state, action, pending] = useActionState(signUp, undefined)
    return (
        <form action={action} style={{display: "flex", flexDirection: "column", gap: 10}}>
            Username: <input type="text" name="username" />
            Email: <input type="email" name="email" />
            Password: <input type="password" name="password" />
            Confirm: <input type="password" name="password2" />
            <button type="submit">Sign Up</button>
            {state?.errors.username}
        </form>
    )
}
