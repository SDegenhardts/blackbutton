"use client"

import styled from "styled-components"
import Link from "next/link"



export default function Header(){
    return (
        <Wrapper>
            <Link href={"/"}>Home</Link>
            <Link href={"/About"}>About</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    display: flex;
    justify-content: left;
    gap: 5%;
    transition: all 0.3s;
    a{
        text-decoration: none;
        color: black;
        background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
}
`