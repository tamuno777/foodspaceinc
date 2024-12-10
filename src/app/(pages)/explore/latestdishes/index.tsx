"use client";
import React, { useState, useEffect } from "react";
import { Dish, useRandomDishes } from "../../../../services/useDishes";
import DishCard from "../../../../components/dishCard";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { addFavorite, removeFavorite } from "@/services/favouriteService";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

const DishesSection: React.FC = () => {
  const dishes = useRandomDishes();
  const router = useRouter();
  const [favorites, setFavorites] = useState<Dish[]>([]);
  const { user, loading } = useAuth();

  // Fetch favorites from Firestore
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
        id: doc.id, // Firestore document ID
      }));

      setFavorites(fetchedFavorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  // Handle favorite toggle
  const handleFavoriteToggle = async (dish: Dish) => {
    if (!user) return;

    try {
      const isAlreadyFavorited = favorites.some((fav) => fav.id === dish.id);

      if (isAlreadyFavorited) {
        await removeFavorite(user.uid, dish.id); // Use correct arguments
        setFavorites((prev) => prev.filter((fav) => fav.id !== dish.id));
      } else {
        await addFavorite(user.uid, dish); // Add user-specific dish
        setFavorites((prev) => [...prev, dish]);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      alert("Failed to update favorite status. Please try again.");
    }
  };

  // Fetch favorites on auth state change
  useEffect(() => {
    if (!loading) fetchFavorites();
  }, [user, loading]);

  return (
    <div className="w-full flex flex-col items-center p-10">
      <h1 className="text-xl font-bold mb-2">Choose a Category</h1>
      <h2 className="text-2xl font-bold mb-8">Recipe Categories</h2>

      <section className="bg-pink-200 w-full flex justify-center items-center flex-col p-5 rounded-lg">
        <div
          className="
            grid gap-6 w-full 
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            p-4 rounded-lg
          "
        >
          {dishes.map((dish) => {
            const isFavorited = favorites.some((favorite) => favorite.id === dish.id);
            return (
              <DishCard
                key={dish.id}
                dish={dish}
                onClick={() => router.push(`/explore/${dish.id}`)}
                isFavorited={isFavorited}
                onFavoriteToggle={() => handleFavoriteToggle(dish)}
              />
            );
          })}
        </div>

        <button
          onClick={() => router.push("/explore")}
          className="mt-6 px-4 py-2 bg-white text-pink-200 rounded-lg"
        >
          Explore More
        </button>
      </section>
    </div>
  );
};

export default DishesSection;
