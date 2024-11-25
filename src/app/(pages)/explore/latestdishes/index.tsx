"use client";
import React from "react";
import { useRandomDishes } from "../../../../services/useDishes";
import DishCard from "../../../../components/dishCard";
import { useRouter } from "next/navigation";

const DishesSection: React.FC = () => {
  const dishes = useRandomDishes();
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center p-10">
      <h1 className="text-xl font-bold mb-2">Choose a Category</h1>
      <h2 className="text-2xl font-bold mb-8">Recipe Categories</h2>
      <section
        className="bg-pink-200 w-full flex justify-center items-center flex-col p-5"
        style={{ width: "100vw" }}
      >
        <div
          className="
  grid gap-6 w-full 
  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
   p-4 rounded-lg
"
        >
          {dishes.map((dish) => (
            <DishCard
              dish={dish}
              onClick={() => router.push(`/explore/${dish.id}`)}
            />
          ))}
        </div>

        <button
          onClick={() => router.push("/explore")}
          className="mt-6 px-4 py-2 bg-white text- text-pink-200 rounded-lg flex justify-center items-center"
        >
          Explore More
        </button>
      </section>
    </div>
  );
};

export default DishesSection;
