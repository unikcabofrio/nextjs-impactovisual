import { useState } from 'react'
import * as S from './style'

import { generateToken } from '@/utils/authUtils'

import { Input, InputPassword } from '@/components/form/input'
import Button from '@/components/form/button'

export default function Index() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleCadastro = async () => {
        const userData = {
            email: email,
            password: password
        };

        const token = generateToken(userData);
        console.log(token)
    };

    return (
        <S.DivContainer>
            <S.DivLogin>
                <h3>Acessar sua conta</h3>
                <p>Faça login na sua conta.</p>
                <Input
                    title={"E-mail"}
                    placeholder={"exemplo@mail.com"}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    type={"email"}
                />
                <InputPassword
                    title={"Senha"}
                    placeholder={"********"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    type={"password"}
                />
                <Button
                    name={"Entrar"}
                    onClick={handleCadastro}
                />
            </S.DivLogin>
        </S.DivContainer>
    )
}


