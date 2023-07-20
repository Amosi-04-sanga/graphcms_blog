import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Hero() {
  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
      >
        <div className="w-full h-[60vh] ">
          <img width="full" height="full" src="/movies6.jpg" alt="image" />
          <div className="legend">
            <h2>TITLE</h2>
            <p>
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </div>
        <div className="w-full h-[60vh]">
          <img src="/movies2.jpg" width="full" height="full" alt="image" />
          <div className="legend">
            <h2>TITLE</h2>
            <p>
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </div>
        <div className="w-full h-[60vh]">
          <img src="/movies3.jpg" width="full" height="full" alt="image" />
          <div className="legend">
            <h2>TITLE</h2>
            <p>
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </div>
        <div className="w-full h-[60vh]">
          <img src="/movies4.jpg" width="full" height="full" alt="image" />
          <div className="legend">
            <h2>TITLE</h2>
            <p>
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </div>
        <div className="w-full h-[60vh]">
          <img src="/movies7.jpg" width="full" height="full" alt="image" />
          <div className="legend">
            <h2>TITLE</h2>
            <p>
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default Hero;
