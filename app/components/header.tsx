"use client"

import styled from "styled-components"
import Link from "next/link"
import { GiPotato } from "react-icons/gi"
import { usePathname } from "next/navigation"


export default function Header(){

        const mantem = usePathname() 
        

    return (
        <Wrapper>
            <Link href={"/"} style={ mantem == "/"?{backgroundColor: "black", color: "white"}:{}}>Home</Link>
            <Link href={"/"}><GiPotato/></Link>
            <Link href={"/about"} style={ mantem == "/about"?{backgroundColor: "black", color: "white"}:{}} >About</Link>
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
        padding: 1.5em 2em;
        font-weight: bold;
        font-size: 1.5em;
        transition: all 0.5s;
    &:hover {
        background-color: black;
        color: white;
    }
}
`