import React from "react"
import styled from "styled-components"


function Divider() {

    return <Wrapper/>
}

export default Divider

const Wrapper = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 60px auto 32px;
`