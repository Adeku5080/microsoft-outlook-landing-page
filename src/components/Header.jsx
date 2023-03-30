import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
        <ItemsContainer> 
         <CompanyLogo>
          <img src='/images/microsoft.png' witdth={50} height={50} alt='microsoft_logo'/>
        </CompanyLogo>

       <Others>
        <div className='premium'>
           Try Premium
        </div>
        <div className='signin'>
           Sign in
        </div>
          
       </Others></ItemsContainer>
      
         
    </Container>
  )
}

const Container = styled.div`
border:1px solid red;
width:100vw;
height :60px;
display:flex;
align-items:center;
background:black;
position:relative;

`
const ItemsContainer = styled.div`
  width:53%;
  margin : 0 auto;
  display:flex;
  border:1px solid green;
  justify-content:space-between;
`
const CompanyLogo = styled.div`
display:flex;
`

const Others = styled.div`
display:flex;
align-items:center;
.premium{
    border:1px solid white;
    color:white;
    padding:8px 18px;
    margin-right:10px;
    border-radius:4px;
}

.signin{
    border:1px solid green;
    color:blue;
    background:white;
    padding:10px 18px;
    border-radius:4px;
}
`

export default Header