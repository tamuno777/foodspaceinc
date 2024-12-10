"use client";
import React, { useEffect, useState } from "react";
import { Dish, useAllDishes } from "../../../services/useDishes";
import DishCard from "../../../components/dishCard";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { addFavorite, removeFavorite } from "@/services/favouriteService";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

const ExplorePage: React.FC = () => {
  const dishes = useAllDishes(); // All dishes from your service
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [categoryFilter, setCategoryFilter] = useState(""); // State for selected category
  const router = useRouter();

  // Filter dishes based on search and category
  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch = dish.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter
      ? dish.category === categoryFilter
      : true;
    return matchesSearch && matchesCategory;
  });
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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Explore All Dishes
      </h2>

      <div className="flex flex-wrap gap-4 mb-4">
        {/* Search Input */}
        <div className="flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for dishes..."
            className="w-full p-2 border rounded-lg bg-pink-200"
          />
        </div>

        {/* Category Filter */}
        <div className="flex-shrink w-full sm:w-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full p-2 border rounded-lg bg-pink-200"
          >
            <option value="">All Categories</option>
            <option value="vegan">Vegan</option>
            <option value="dessert">Dessert</option>
            <option value="local-dish">Local Dishes</option>
            <option value="world-plate">World Dishes</option>
          </select>
        </div>
      </div>

      {/* Dish Cards */}
      <section className="bg-pink-200 w-full flex justify-center items-center flex-col p-5 rounded-lg">
        <div
          className="
            grid gap-6 w-full 
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            p-4 rounded-lg
          "
        >
          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              onClick={() => router.push(`/explore/${dish.id}`)}
              dish={dish}
              isFavorited={favorites.some((fav) => fav.id === dish.id)}
              onFavoriteToggle={() => handleFavoriteToggle(dish)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
