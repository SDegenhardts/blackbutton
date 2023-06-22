"use client"

import styled from "styled-components"
import Link from "next/link"



export default function Header(){
    return (
        <Wrapper>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    gap: 5%;
    transition: all 0.5s;
    background-color: white;
    a{
        text-decoration: none;
        color: black;
        background-color: white;
        padding: 1em 2em;
        font-weight: bold;
        font-size: 1.5em;
    &:hover {
        background-color: black;
        color: white;
    }
}
`