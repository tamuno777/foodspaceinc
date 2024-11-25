"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, getDocs, limit } from "firebase/firestore";


export interface Dish {
  id: string;
  title: string;
  description?: string;
  image?: string;
  chef?: string;
}

export const useAllDishes = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const q = query(collection(db, "dishes"));
        const querySnapshot = await getDocs(q);

        const fetchedDishes: Dish[] = querySnapshot.docs.map((doc) => ({
          ...(doc.data() as Dish),
          id: doc.id,
        }));

        setDishes(fetchedDishes);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
  }, []);

  return dishes;
};


export const useRandomDishes = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchRandomDishes = async () => {
      const q = query(collection(db, "dishes"), limit(4));
      const querySnapshot = await getDocs(q);

      const fetchedDishes: Dish[] = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Dish),
        id: doc.id,
      }));

      setDishes(fetchedDishes);
    };

    fetchRandomDishes();
  }, []);

  return dishes;
};
