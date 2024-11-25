"use client";

import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import "../../../../components/dishCard/index.css"
import DishCard from "@/components/dishCard";
import { useRouter } from "next/navigation";

interface Dish {
  id: string;
  title: string;
  description?: string;
  image?: string;
  chef?: string;
  category: string;
}

const LocalDish = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchLocalDishes = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, "dishes"),
          where("category", "==", "local-dish")
        );
        const querySnapshot = await getDocs(q);

        const fetchedDishes: Dish[] = querySnapshot.docs.map((doc) => ({
          ...(doc.data() as Dish),
          id: doc.id,
        }));

        setDishes(fetchedDishes);
      } catch (error) {
        console.error("Error fetching local dishes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocalDishes();
  }, []);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  if (dishes.length === 0) {
    return (
      <p className="text-center text-lg font-semibold">
        No local dishes found.
      </p>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Local Dishes</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dishes.map((dish) => (
         <DishCard
         key={dish.id}
         onClick={() => router.push(`/explore/${dish.id}`)} 
         dish={dish}
       />
        ))}
      </div>
    </div>
  );
};

export default LocalDish;
