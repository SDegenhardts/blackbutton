"use client"

import Image from "next/image"
import styled from "styled-components"

// export const metadata = {
//   title: 'About',
//   description: 'About',
// }

export default function Home() {
  return (
    <Wrapper>
        <h1>About Potato</h1>
      <Image
       src={"/batata.jpg"}
       width={900}
       height={450}
       alt='Batata'
      />
    </Wrapper>
  )
  }

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5em;
    flex-direction: column;
    align-items: center;
    color: white;
  `