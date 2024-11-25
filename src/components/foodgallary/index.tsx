"use client";

import React from "react";

const FoodGallery = () => {
  const images = [
    "https://i.pinimg.com/474x/2a/fd/95/2afd95f3c4246c097ae83683dabb74ad.jpg", // Replace with actual URLs
    "https://i.pinimg.com/474x/e3/25/99/e3259916656f2761360a329b479f737e.jpg",
    "https://i.pinimg.com/474x/a4/0f/1f/a40f1f669ca0fa8e1569cf62e65ff9cc.jpg",
    "https://i.pinimg.com/474x/21/29/e6/2129e6cc122a921753ddef269799643a.jpg",
    "https://i.pinimg.com/474x/3e/e0/5f/3ee05f540df563fbe696e077c5e0ceaa.jpg",
    "https://i.pinimg.com/474x/07/21/80/07218041efac3521a15f0a871f8eab3c.jpg",
    "https://i.pinimg.com/474x/34/09/15/340915b8c6e832b402b7356d4f97cdd7.jpg",
    // "https://i.pinimg.com/474x/ef/10/43/ef1043e4353ba3c5f2c8ee271fd5073c.jpg",
    "https://i.pinimg.com/474x/90/8b/44/908b44dacaf63409d017568513b57e03.jpg",
  ];

  return (
    <section className="my-10 ">
      <div className=" ">
        <h2 className="text-3xl font-bold text-center mb-6">Food Gallery</h2>
        <p className="text-gray-600 text-center mb-10">
          Explore some of the best dishes from around the world. Each one crafted with love and passion!
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-100 py-6 w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-56  overflow-hidden shadow-md transform transition-transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Food item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;
