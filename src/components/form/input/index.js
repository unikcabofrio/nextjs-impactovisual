import { useState } from 'react'
import * as S from './style'

export function Input(props) {
    return (
        <S.DisContainer onClick={props.onClick}>
            <S.Label>{props.title}</S.Label>
            <S.Input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </S.DisContainer>
    )
}


export function InputPassword(props) {
    const [viewPassword,setViewPassword] = useState(false)
    return (
        <S.DisContainer onClick={props.onClick}>
            <S.Label>{props.title}</S.Label>
            <div>
                <S.Input
                    className='password'
                    type={!viewPassword ? props.type : "text"}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                <S.Button 
                    className={!viewPassword ? "fi fi-sr-eye" : "fi fi-sr-eye-crossed"}
                    onClick={()=>{setViewPassword(!viewPassword)}}
                />
            </div>
        </S.DisContainer>
    )
}


