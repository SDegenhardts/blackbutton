"use client"

import styled from "styled-components"
import Link from "next/link"
import {GiPotato} from "react-icons/gi"



export default function Header(){
    return (
        <Wrapper>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}><GiPotato/></Link>
            <Link href={"/about"}>About</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5%;

    svg{
        fill: #000000;
        background-color: none;
        height: 1.5em;
        width: 2.5em;
        transition: 0.5s;
        &:hover{
        fill: white;
        }

    }
    
    background-color: white;
    a{
        text-decoration: none;
        color: black;
        background-color: white;
        padding: 1em 2em;
        font-weight: bold;
        font-size: 1.5em;
        transition: all 0.5s;
    &:hover {
        background-color: black;
        color: white;
    }
}
`