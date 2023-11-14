"use client"

import Image from "next/image"
import styled from "styled-components"
import { useState } from "react"
import Link from "next/link"
import { GiCelebrationFire } from "react-icons/gi"

// export const metadata = {
//   title: 'About',
//   description: 'About',
// }

export default function Home() {

  let image = [
    "/batata.jpg",
    "/frita.webp",
    "/ralada.webp",
    "/recheada.jpeg",
    "/soute.jpeg",
    "/queimada.webp"
  ]
  
  //  const trocaimagem = () => {
  //     setImage ( state => state === 'frita' ? 'ralada': 'frita');
  //  }
   const [imagem,setImage] = useState(image[0]);

  return (
    <Wrapper>
    <div>
      <Image src={"/fritadeira.png"} width={50} height={50} alt={"frita"}/>
      <Image src={"/ralador.png"} width={50} height={50} alt={"ralar"}/>
      <GiCelebrationFire/>
    </div>
      <Image onClick={() => imagem == image[image.length -1]?setImage(image[0]):setImage(image[image.indexOf(imagem)+1])} src={imagem} width={1000} height={500} alt='Batata'/>
    </Wrapper>
  )
  }

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.2em;
    align-items: center;

    div{
      align-items: center;
      display: flex;
      justify-content: left;
    }
  `