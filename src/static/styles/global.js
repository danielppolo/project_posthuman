import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Agrandir';
    font-style: normal;
    font-weight: 100 900;
    font-stretch: 75% 125%;
    src: url('../fonts/Agrandir-Variable.ttf') format('truetype');
}

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
