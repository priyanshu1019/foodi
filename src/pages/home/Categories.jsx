import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    img: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 breakfast)",
    img: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(48 Dessert)",
    img: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(255 items)",
    img: "/images/home/category/img4.png",
  },
];

const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Categories</h2>
      </div>
      {/* category item cards */}
      <div className="flex flex-col sm:flex-row justify-around flex-wrap gap-8 items-center mt-12">
        {categoryItems.map((item, i) => (
          <div
            className="bg-white shadow-lg rounded-xl py-6 px-5 w-60 mx-auto text-center cursor-pointer hover:translate-y-4 duration-300 transition-all"
            key={item.id}
          >
            <div className="flex w-full justify-center items-center mx-auto">
              <img
                src={item.img}
                alt="category-img"
                className="bg-[#C1F1C6] w-24 h-24 rounded-full p-5"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5> {item.title} </h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
