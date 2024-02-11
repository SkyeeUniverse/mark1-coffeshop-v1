import React from "react";
import producticon1 from "../assets/producticon/producticon1.png";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import cafe from "../assets/cafe.jpg";

export default function Product() {
  return (
    <div>
      {/* Text about */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={producticon1} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-netralDGrey font-semibold mb-4 mb:w-4/5">
              From our best farm at pinrang city
            </h2>
            <p className="md:w-3/4 text-sm text-netralGrey mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ipsum quod, illum quisquam eaque alias sint voluptate, error,
              consequatur saepe ab laboriosam aperiam dolorem quidem excepturi
              nam tempora deserunt necessitatibus nemo inventore modi autem
              possimus? Laborum deleniti error quod veniam voluptate accusantium
              necessitatibus ipsam deserunt sint autem. Repellat impedit eius
            </p>
            <button className="btn-primary">Learn more</button>
          </div>
        </div>
      </div>
      {/* company status */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-netralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src={cafe} alt="" className="" />
          </div>
          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-netralGrey mb-8  leading-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate similique dolores pariatur ipsum in animi fugiat
                perferendis, consectetur tenetur! Enim dignissimos asperiores
                alias odio tenetur velit itaque laborum nobis molestias Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eius,
                expedita Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Architecto, obcaecati Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Ipsa, esse. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Blanditiis, sint!
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                SkyeeUniverse
              </h5>
              <p className="text-sm text-netralGrey">CEO of Beanspedia</p>
              <div>
                <div>
                  <div className="flex w-8 gap-8 mb-2 mt-2">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                    <img src={icon5} alt="" />
                    <img src={icon6} alt="" />
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <a
                    href=""
                    className="font-bold text-brandPrimary hover:text-netralGrey"
                  >
                    Meet All Costumers{" "}
                    <svg
                      width="6"
                      height="4"
                      viewBox="0 0 6 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block ml-2"
                    >
                      <path
                        d="M4.02324 3.24222L5.12263 2.14283C5.25301 2.01245 5.25301 1.80106 5.12263 1.67068L4.02324 0.571289M5.02484 1.90676L0.350708 1.90676"
                        stroke="#4CAF4F"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
