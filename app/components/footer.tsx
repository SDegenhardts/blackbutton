"use client"

import { styled } from "styled-components"

export default function Footer(){
    return(
        <Wrapper>
            batata frita é bom!!!!!!!!!!!!!
        </Wrapper>
    )
}

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    color: #000000;
    background-color: #ffffff;
    padding: 1em 2em;
    font-size: 1em;
    transition: all 0.5s;

    &:hover{
        background-color: black;
        color: white;

    }
`