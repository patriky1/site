import React from "react";
import Carousel from "nuka-carousel";
import Img1 from "../carousel2/imagens-carousel/imc1.png";
import Img2 from "../carousel2/imagens-carousel/imc2.png";
import Img3 from "../carousel2/imagens-carousel/imc3.png";
import Img4 from "../carousel2/imagens-carousel/imc4.png";
import Img5 from "../carousel2/imagens-carousel/imc5.png";
import Img6 from "../carousel2/imagens-carousel/imc6.png";


import "./carousel2.css";

export default function CarouNuka() {
  return (
    <Carousel className="carouselwhidth"

    cellAlign="center"
    slidesToShow={1}
        defaultControlsConfig={{
        nextButtonText: "Next",
        prevButtonText: "Prev",
        pagingDotsStyle: {fill: 'red'}
      }}
      autoplay={true}
      autoplayInterval={2000}
      wrapAround={true}
      withoutControls={true}
      transitionMode={"fade"}
      pauseOnHover={false}
      swiping={false} //Enable touch swipe/dragging
      //speed = {2000}
    >
      <img src={Img1} className="CarouselImg" height="100%" width="100%" alt="..." />
      <img src={Img2} className="CarouselImg" height="100%" width="100%" alt="..." />
      <img src={Img3} className="CarouselImg" height="100%" width="100%" alt="..." />
      <img src={Img4} className="CarouselImg" height="100%" width="100%" alt="..." />
      <img src={Img5} className="CarouselImg" height="100%" width="100%" alt="..." />
      <img src={Img6} className="CarouselImg" height="100%" width="100%" alt="..." />
    </Carousel>
  );
}
