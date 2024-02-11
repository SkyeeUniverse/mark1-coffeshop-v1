import React from "react";
import about2 from "../assets/about2.png";
import bouticon1 from "../assets/bouticon/bouticon1.png";
import bouticon2 from "../assets/bouticon/bouticon2.png";
import bouticon3 from "../assets/bouticon/bouticon3.png";
import bouticon4 from "../assets/bouticon/bouticon4.png";

export default function About() {
  return (
    <div>
      {/* Text about */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={about2} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-netralDGrey font-semibold mb-4 mb:w-4/5">
              The unseen of spending three of the years at Beanspedia
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
          <div className="md:w-1/2">
            <h2 className="text-4xl text-netralDGrey font-semibold mb-4 mb:w-2/3">
              Helping a Local and Nasional{" "}
              <span className="text-brandPrimary">
                Business reinvent it self
              </span>
            </h2>
            <p className="text-netralGrey mb-8">
              We reached here with our hard work and dedication
            </p>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={bouticon1} alt="" />
                <h4 className="text-2xl text-netralDGrey font-semibold">
                  2,355,234
                </h4>
                <p>Members</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={bouticon2} alt="" />
                <h4 className="text-2xl text-netralDGrey font-semibold">
                  46.456
                </h4>
                <p>Clubs</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={bouticon3} alt="" />
                <h4 className="text-2xl text-netralDGrey font-semibold">
                  675,456
                </h4>
                <p>Event bookings</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={bouticon4} alt="" />
                <h4 className="text-2xl text-netralDGrey font-semibold">
                  1,325,234
                </h4>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
