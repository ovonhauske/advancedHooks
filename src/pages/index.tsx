import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { useWindowSize } from "react-use"

import FlutterBuild from "../components/builds/FlutterBuild"
import PurchaseButton from "../components/buttons/PurchaseButton"
import CourseCard from "../components/cards/CourseCard"
import Divider from "../components/layout/Divider"
import GridSetcion from "../components/sections/GridSection"

import Layout from "../components/layout"

const IndexPage = ({data})=>  {
  const { width } = useWindowSize()

  const title = data.allContentfulCourse.edges[0].node.title
  const description = data.allContentfulCourse.edges[0].node.description

  const sections = data.allContentfulCourse.edges[0].node.sections


  return(
    <Layout>
      <Wrapper>
        <HeroWrapper>
          <CourseCard/>
          <TextWrapper>
            <Logo src="../images/logos/react-logo.svg" alt="icon"/>
            <Title>{title}</Title>
            <Caption> 20 Sections - 3 hrs of videos</Caption>
            <Description> {description}</Description>
            <AuthorWrapper>
              <AuthorImage src="../images/avatars/Meng.png" alt="authorImage"/>
              <Caption>Taught by Meng To</Caption>
            </AuthorWrapper>
            <PurchaseButton/>
            <SmallText>Purchase Includes Access to 30 courses over 80 hours of content, including 12 hours of Swift UI, iOs 13 and iOs 14</SmallText>
          </TextWrapper>
        </HeroWrapper>
        <Divider/>

        <GridSetcion sections = {sections}/>
        <FlutterWrapper width={width}>
          <FlutterBuild />
        </FlutterWrapper>
      </Wrapper>
    </Layout>
  )
  
}

export default IndexPage

export const query = graphql`
query IndexPageQuery {
  allContentfulCourse {
    edges {
      node {
        title
        description
        sections {
          title
          description
          duration
          slug
        }
      }
    }
  }
}
`



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

@media (max-width:1440px) {

  transform-origin: top left;
  transform: scale(${props => props.width / 1440});
  
};

overflow: hidden;
`
