import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialDishes from "./SpecialDishes";
import Testimonials from "./Testimonials";
import OurServices from "./OurServices";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <OurServices />
    </div>
  );
};

export default Home;
