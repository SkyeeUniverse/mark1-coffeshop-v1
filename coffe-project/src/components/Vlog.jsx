import React from "react";

export default function Vlog() {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      imgae: "/src/assets/blogs/blog1.png",
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      imgae: "/src/assets/blogs/blog2.png",
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      imgae: "/src/assets/blogs/blog3.png",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
      <div>
        <div className="text-center md:w-1/2 mx-auto">
          <h2 className="text-4xl text-netralDGrey font-semibold mb-4">
            Caring is the new marketing
          </h2>
          <p className="text-sm text-netralGrey mb-8 md:w-3/4 mx-auto">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        {/* allblogs */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
          {blogs.map((blog) => (
            <div key={blog} className="mx-auto relative mb-12 cursor-pointer">
              <img
                src={blog.imgae}
                alt=""
                className="w-96 hover:scale-95 transition-all duration-300"
              />
              <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                <h3 className="mb-3  text-netralGrey font-semibold">
                  {blog.title}
                </h3>
                <div className="flex items-center justify-center gap-8">
                  <a
                    href=""
                    className="font-bold text-brandPrimary hover:text-netralGrey"
                  >
                    Readmore
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
          ))}
        </div>
      </div>
    </div>
  );
}
