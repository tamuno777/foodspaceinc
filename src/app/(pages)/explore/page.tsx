"use client";

import React from "react";
import { useAllDishes } from "../../../services/useDishes";
import DishCard from "../../../components/dishCard";
import { useRouter } from "next/navigation";

const ExplorePage: React.FC = () => {
  const dishes = useAllDishes();
  const router = useRouter();
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Explore All Dishes</h2>
      <section className="bg-pink-200 w-full flex justify-center items-center flex-col p-5 rounded-lg">
        <div
          className="
            grid gap-6 w-full 
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            p-4 rounded-lg
          "
        >
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              onClick={() => router.push(`/explore/${dish.id}`)} 
              dish={dish}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
