import Carousel from "nuka-carousel";
import Imagem1 from "../imagens/imc1.png"
import Imagem2 from "../imagens/imc2.png"
import Imagem3 from "../imagens/imc3.png"
import Imagem4 from "../imagens/imc4.png"
import Imagem5 from "../imagens/imc5.png"
import Imagem6 from "../imagens/imc6.png"
import Imagem7 from "../imagens/imc7.png"
import Imagem8 from "../imagens/imc8.png"
import Imagem9 from "../imagens/imc9.png"
import Imagem10 from "../imagens/imc10.png"
import Imagem11 from "../imagens/imc11.png"
import Imagem12 from "../imagens/imc12.png"
import Imagem13 from "../imagens/imc13.png"


import React from 'react'

function Carrossel() {
  return (
    <>
    <Carousel 
    
    cellAlign="center"
    slidesToShow={4}
    autoplay = {true}
    autoplayInterval = {2000}
    wrapAround = {true}
    withoutControls = {true}
    transitionMode = {"fade"}			
    pauseOnHover ={false} 
    swiping = {false}//Enable touch swipe/dragging
    //speed = {2000}
  >
    <img src={Imagem1} height="400px" width="200px" alt="...."/>
    <img src={Imagem2} height="400px" width="200px" alt="...." />
    <img src={Imagem3} height="400px" width="200px" alt="...." />
    <img src={Imagem4} height="400px" width="200px" alt="...." />
    <img src={Imagem5} height="400px" width="200px" alt="...." />
    <img src={Imagem6} height="400px" width="200px" alt="...." />
    <img src={Imagem7} height="400px" width="200px" alt="...." />
    <img src={Imagem8} height="400px" width="200px" alt="...." />
    <img src={Imagem9} height="400px" width="200px" alt="...." />
    <img src={Imagem10} height="400px" width="200px" alt="...." />
    <img src={Imagem11} height="400px" width="200px" alt="...." />
    <img src={Imagem12} height="400px" width="200px" alt="...." />
    <img src={Imagem13} height="400px" width="200px" alt="...." />
  </Carousel>
    
    </>
  )
}

export default Carrossel