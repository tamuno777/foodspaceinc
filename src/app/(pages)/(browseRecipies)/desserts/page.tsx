"use client";

import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import "../../../../components/dishCard/index.css";
import { useRouter } from "next/navigation";
import DishCard from "@/components/dishCard";
import { addFavorite, removeFavorite } from "@/services/favouriteService";
import { useAuth } from "@/context/authcontext";

interface Dish {
  id: string;
  title: string;
  description?: string;
  image?: string;
  chef?: string;
  category: string;
}

const Desserts = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { user } = useAuth();

  const [favorites, setFavorites] = useState<Dish[]>([]);

  const fetchFavorites = async () => {
    if (!user) return;

    try {
      const q = query(
        collection(db, "favorites"),
        where("uid", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);

      const fetchedFavorites: Dish[] = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Dish),
        id: doc.id,
      }));

      setFavorites(fetchedFavorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) {
      window.location.href = "/auth";
      return;
    }

    fetchFavorites();
  }, [user, loading]);

  const handleFavoriteToggle = async (dish: Dish) => {
    if (!user) return;

    try {
      const isAlreadyFavorited = favorites.some((fav) => fav.id === dish.id);

      if (isAlreadyFavorited) {
        await removeFavorite(user.uid, dish.id);
        setFavorites((prev) => prev.filter((fav) => fav.id !== dish.id));
      } else {
        await addFavorite(user.uid, dish);
        setFavorites((prev) => [...prev, dish]);
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  useEffect(() => {
    const fetchLocalDishes = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, "dishes"),
          where("category", "==", "dessert")
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
        No Dessert dishes found.
      </p>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Dessert Dishes</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            onClick={() => router.push(`/explore/${dish.id}`)}
            dish={dish}
            isFavorited={favorites.some((fav) => fav.id === dish.id)}
            onFavoriteToggle={() => handleFavoriteToggle(dish)}
          />
        ))}
      </div>
    </div>
  );
};

export default Desserts;
