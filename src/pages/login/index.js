import { useState } from 'react'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import Login from '@/Views/Login'

export default function Index() {

    const router = useRouter();
    const [loading,setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msgAlert, setMsgAlert] = useState("")

    const handleCadastro = async () => {
        setLoading(true)
        await fetch('/api/authenticated', {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(async (result) => {
               
                const res = await result.json()
                if (res.auth) {
                    const expirationDate = new Date();
                    expirationDate.setDate(expirationDate.getDate() + 30);
                    setCookie('token', res.auth, {expires:expirationDate});

                    setTimeout(() => {
                        router.push('/painel');
                    }, 1000)
                    
                }

                setLoading(false)
                setMsgAlert(res.message)
                
                if (!msgAlert) {
                    setTimeout(() => {
                        setMsgAlert("")
                    }, 5000)
                }

            })


    };

    return(
        <>
            <Login
                handleCadastro={handleCadastro}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                msgAlert={msgAlert}
                loading={loading}
            />
        </>
    )
}