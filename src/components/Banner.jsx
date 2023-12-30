import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* image */}
        <div className="md:w-1/2">
          <img src="/images/banner.png" alt="banner" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="flex gap-3 bg-[#FFF] py-2 px-3 rounded-2xl items-center shadow-2xl w-70">
              <img
                src="/images/home/b-food1.png"
                alt="food1"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p>
                  <span className="text-red text-xs">$</span>18.00
                </p>
              </div>
            </div>
            <div className="sm:flex hidden gap-3 bg-[#FFF] py-2 px-3 rounded-2xl items-center shadow-2xl w-70">
              <img
                src="/images/home/b-food2.png"
                alt="food1"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Vegetarian salad</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p>
                  <span className="text-red text-xs">$</span>18.00
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* text */}
        <div className="md:w-1/2 space-y-7">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className=" text-lg sm:text-xl text-[#4A4A4A]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="btn bg-green rounded-full text-[#FFFFFF] px-8 py-3 font-semibold">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
