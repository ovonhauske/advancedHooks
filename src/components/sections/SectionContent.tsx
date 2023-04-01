 import React from "react";
 import styled from "styled-components";
 import { graphql } from "gatsby";
import { renderHtmlAst } from "../../functions/renderHtmlAst";



 function  SectionContent(props) {
    const {htmlAst}= props 
    return(

        <Wrapper>
            {renderHtmlAst(htmlAst)}
        </Wrapper>
    )
 }


export default SectionContent


const Wrapper = styled.div`

    max-width: 712px;
    margin: 0 auto;
    text-align: start;
    padding: 100px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    h2 {
        display: block;
        font-size: 1.5em;
        margin-top: 0.83em;
        margin-bottom: 0.43em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
    }

    p {
        margin-top:1em;
        margin-bottom: 1em;
        margin-left: 0;
        margin-right: 0;
        line-height: 130%;
    }
    img {
        width: 100%;
    }
`

