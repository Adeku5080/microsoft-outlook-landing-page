import React from 'react'
import styled from 'styled-components'

const Intro = () => {
  return (
    <Container>Intro</Container>
  )
}

const Container = styled.div`
width:100vw;
height:100vh;
border:1px solid red;
background-image:url("./images/outlook.jpg");
background-repeat:no-repeat;
//   background-origin: content-box;
    background-position: 45% center;
    background-size:cover;
    background-color:#2a2112;
    overflow:hidden;

`


export default Intro