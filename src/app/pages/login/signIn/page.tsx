import Image from "next/image"
import LoginForm from "@/app/components/login-form"

export default function SignIn () {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <LoginForm />
        </div>
    )
};