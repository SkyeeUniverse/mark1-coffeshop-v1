import React from "react";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management Coffe beans full automation  of membership renewals and payments",
      image: "/src/assets/cardicons/cardicon1.png",
    },
    {
      id: 2,
      title: "Cafe Associations",
      description:
        "Our membership management Coffe beans full automation  of membership renewals and payments",
      image: "/src/assets/cardicons/cardicon2.png",
    },
    {
      id: 3,
      title: "Membership Organisations",
      description:
        "Our membership management Coffe beans full automation  of membership renewals and payments",
      image: "/src/assets/cardicons/cardicon3.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className=" text-center my-8">
        <h2 className="text-4xl text-netralDGrey font-semibold mb-2">
          Our Client
        </h2>
        <p className="text-netralGrey">
          We have been working with some Future 500+ clients
        </p>

        {/* Company Logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={icon1} alt="" className="h-20" />
          <img src={icon2} alt="" className="h-14" />
          <img src={icon3} alt="" className="h-20" />
          <img src={icon4} alt="" className="h-14" />
          <img src={icon5} alt="" className="h-20" />
          <img src={icon6} alt="" className="h-14" />
        </div>
      </div>
      {/* Service card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-netralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-netralGrey">Who is Beanspedia suitable for ?</p>
      </div>
      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            key={service.id}
          >
            <div>
              <div className="h-14 w-14 mx-auto ">
                <img className="-ml-5" src={service.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-netralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-netralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
