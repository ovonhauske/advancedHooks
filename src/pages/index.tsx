import * as React from "react"
import styled from "styled-components"
import { useWindowSize } from "react-use"

import FlutterBuild from "../components/builds/FlutterBuild"
import PurchaseButton from "../components/buttons/PurchaseButton"
import CourseCard from "../components/cards/CourseCard"

const IndexPage = ()=>  {
  const { width } = useWindowSize()

  return(
    <Wrapper>
      <HeroWrapper>
        <CourseCard/>
        <TextWrapper>
          <Logo src="../images/logos/react-logo.svg" alt="icon"/>
          <Title>Build a Web App with React Hooks</Title>
          <Caption> 20 Sections - 3 hrs of videos</Caption>
          <Description> Learn how we built the new DesignCode Site with Reach Hooks</Description>
          <AuthorWrapper>
            <AuthorImage src="../images/avatars/Meng.png" alt="authorImage"/>
            <Caption>Taught by Meng To</Caption>
          </AuthorWrapper>
          <PurchaseButton/>
          <SmallText>Purchase Includes Access to 30 courses over 80 hours of content, including 12 hours of Swift UI, iOs 13 and iOs 14</SmallText>
        </TextWrapper>
      </HeroWrapper>
      <FlutterWrapper width={width}>
        <FlutterBuild />
      </FlutterWrapper>
    </Wrapper>
  )
  
}

export default IndexPage



const Wrapper = styled.div `
  background: linear-gradient(45deg, #4316db 14%, #9076e7);
`
const HeroWrapper = styled.div`
  display: grid;
  max-width: 1200px;
  grid-template-columns: 360px auto;
  gap: 40px;
  padding: 220px 20px 100px 20px;
  justify-items: center;
  margin: 0 auto;
  align-items: center;

  @media (max-width:780px) {
    grid-template-columns: 1fr;
  }
`


const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 16px;
  max-width: 500px;

  @media (max-width:780px) {
    justify-items: center;
    text-align: center;
  }
`

const Logo = styled.img `
  width: 60px;
  height: 60px;
`

const Title = styled.h1`
  font-style:normal;
  font-weight: Bold;
  font-size: 60px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0,0,0,0.3);
`

const Caption = styled.p`
  font-size: 16px;
  font-style: normal;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
`

const Description =styled.p `
  font-style: normal;
  line-height: 120%;
  color: #ffffff;
`

const AuthorWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  gap: 8px;
  align-items: center;
`

const AuthorImage = styled.img`
  height:32px;
  width: 32px;
`

const SmallText = styled.p`
font-style: normal;
font-size: 14px;
line-height: 130%;
color: rgba(255,255,255,0.7);
max-width: 300px;
`

const FlutterWrapper = styled.div`
margin: 100px auto;
border: 1px solid #fff;

@media (max-width:1440px) {

  transform-origin: top left;
  transform: scale(${props => props.width / 1440});
  
};

overflow: hidden;
`
