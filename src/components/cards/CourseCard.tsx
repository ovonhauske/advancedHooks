import React from "react";
import styled from "styled-components";
import Circles from "../animations/Circles";

function CourseCard () {
return <Wrapper>
   <AnimationWrapper >
    <Circles />
   </AnimationWrapper>
    <Illustration src = "/images/illustrations/illustration-1.png"/>
</Wrapper>
}

export default CourseCard

const Wrapper = styled.div`
    width: 100%;
    max-width: 360px;
    height: 400px;
    background: linear-gradient(#ff8570 15%, #f9504b 100%);
    border-radius: 20px;
    box-shadow: 0px 30px 60px rgba(0,0,0, 0.25), inset 0px 0px 0px 0.5px rgba(255,255,255, 0.1)  ;
    inset: 0;
    display: grid;
    justify-content: center;
    align-content: center;
`

const AnimationWrapper = styled.div `
    position: absolute;
    width: 360px;
    overflow: hidden;
    padding: 30px 0 0 0 ;
    mix-blend-mode: overlay;
`

const Illustration = styled.img`
    width: 300px;
    z-index: 3;
`