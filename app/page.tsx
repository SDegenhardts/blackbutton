"use client"

import Image from "next/image"
import styled from "styled-components"
import { useState } from "react"
import Link from "next/link"

// export const metadata = {
//   title: 'About',
//   description: 'About',
// }

export default function Home() {

  let image = [
    "/batata.jpg",
    "/frita.webp",
    "/ralada.webp"
  ]
  
   const trocaimagem = () => {
      setImage ( state => state === 'frita' ? 'ralada': 'frita');
   }
   const [imagem,setImage] = useState(image[0]);

  return (
    <Wrapper>
      {/* <Image src={"/fritadeira.png"} width={50} height={50} alt={"frita"}/> */}
      {/* <Image src={"/ralador.png"} width={50} height={50} alt={"ralar"}/> */}
    </Wrapper>
  )
  }

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.2em;
  `