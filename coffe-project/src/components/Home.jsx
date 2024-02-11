import { Carousel } from "flowbite-react";
import React from "react";
import slide1 from "../assets/Slide1-01.png";
import slide2 from "../assets/slide2.png";

export default function Home() {
  return (
    <>
      <div className="bg-netralSilver" id="home">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
          <Carousel className="w-full mx-auto">
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={slide1} alt="" className="slide1" />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-netralDGrey md:w-3/4 leading-snug">
                  Best Beans you can get{" "}
                  <span className="text-brandPrimary leading-snug">
                    from the best farm
                  </span>
                </h1>
                <p className="text-netralGrey text-base mb-8">
                  Grow your business with heart
                </p>
                <button className="btn-primary">Get yours</button>
              </div>
            </div>
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={slide2} alt="" className="slide2" />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-netralDGrey md:w-3/4 leading-snug">
                  Make your own coffee{" "}
                  <span className="text-brandPrimary leading-snug">
                    with Love
                  </span>
                </h1>
                <p className="text-netralGrey text-base mb-8">
                  Happy costumer happy owner
                </p>
                <button className="btn-primary">Try 1 Month</button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      ;
    </>
  );
}
