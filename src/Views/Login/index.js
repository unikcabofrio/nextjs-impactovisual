import * as S from './style'

import { Input, InputPassword } from '@/components/form/input'
import Button from '@/components/form/button'

export default function Index({handleCadastro,email,setEmail,password,setPassword,msgAlert,loading}) {
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
                    loading={loading}
                />
                <S.pAlert
                    style={{
                        display: msgAlert ? "block" : "none"
                    }}
                >{msgAlert}</S.pAlert>
            </S.DivLogin>
        </S.DivContainer>
    )
}