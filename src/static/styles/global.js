import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 html,
 body {
     width: 100%;
     height: 100%;
     overflow: hidden;
     font-family: 'Agrandir', sans-serif;
     font-variation-settings: 'wght' 375, 'GRAD' 88;
 }
 
 body {
     position: relative;
     line-height: 1;

     background-color: #fff;
     color: #000;
 }
`

export default GlobalStyle
