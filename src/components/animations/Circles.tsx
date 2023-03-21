import React, {useState} from "react";
import styled, { keyframes } from "styled-components";



function Circles (){
    const [animation, setAnimation] =useState(false)

    return <Wrapper 
    onMouseEnter ={()=> setAnimation(true)}
    onMouseLeave ={ ()=> setAnimation(false)}
    >
        <Circle animation={animation} />
        <Circle2 animation={animation}/>
    </Wrapper>
}


export default Circles


const scale = keyframes`
    0% { transform : scale(1) }
    100% {transform : scale(1.2)}

`

const Wrapper = styled.div`
width: 420px;
height: 420px;
`

const Circle = styled.div `
position: absolute;
width: 420px;
height: 420px;
background: linear-gradient(189deg, #9fe1ff 0%,
rgba(195,236,255, 0.01) 50%,
rgba(255,255,255, 0) 100%
);
border-radius: 9999999px;
left: calc(50% - 420px / 2);
top: calc(50% - 420px / 2);

animation: ${scale} 0.6s ease-in-out forwards;
animation-play-state: ${props=> (props.animation? "running" : "paused")};
`

const Circle2 = styled(Circle)`
  width: 260px;
  height: 260px;
  border-radius: 135px;
  left: calc(50% - 260px / 2);
  top: calc(50% - 260px / 2);


`
