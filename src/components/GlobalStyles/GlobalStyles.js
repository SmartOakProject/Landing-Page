import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat');


:root{
    --color-white: #fff;
    --color-black: #000;
}

* {
    margin: 0;
    padding: 0;
}
/* Media queries które uzywamy */
/* @media screen and (max-width: 600px) {

 	}	
	
@media screen and (max-width: 900px) {

	}
	
@media screen and (max-width: 1200px) {

  } */
*,
*::after,
*::before {
    box-sizing: inherit; 	
}

html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1 rem = 10px, 10px/16p = 62.5% */
}

body {
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
}

/* responsive image */
img {
    max-width: 100%;
    height: auto;
    
}
video{
    max-width: 100%;
    height: auto;
}
`

export default GlobalStyle
