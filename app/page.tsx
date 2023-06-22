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
      <Image
       src={"/batata.jpg"}
       width={1000}
       height={500}
       alt='Batata'
      />
    </Wrapper>
  )
  }

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.2em;
  `