import React from "react";
import cat1 from "../../../public/localdish.jpg";
import cat2 from "../../../public/intercontinentaldish.jpg";
import cat3 from "../../../public/dessart.jpg";
import cat4 from "../../../public/vegandish.jpg";
import Image from "next/image";

const HomeCategory = () => {
  const Categories = [
    { img: cat1, title: "LOCAL" },
    { img: cat2, title: "WORLD PLATE" },
    { img: cat3, title: "DESSERTS" },
    { img: cat4, title: "VEGETARIAN" },
  ];

  return (
    <div className="w-full flex flex-col items-center p-10">
      <h1 className="text-xl font-bold mb-2">Choose a Category</h1>
      <h2 className="text-2xl font-bold mb-8">Recipe Categories</h2>

      <div className="flex flex-wrap justify-around gap-8 w-full">
        {Categories.map((content, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="relative group">
              {/* Image */}
              <Image
                src={content.img}
                alt={content.title}
                className="w-40 h-40 object-cover rounded-full transition-all duration-300 group-hover:brightness-50"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-md font-semibold">{content.title}</p>
              </div>
            </div>
            <p className="text-xl font-bold mt-4">{content.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
