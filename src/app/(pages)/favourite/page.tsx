"use client";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import DishCard from "@/components/dishCard";

interface Dish {
  id: string;
  title: string;
  description: string;
  image: string;
  chef: string;
}

const FavoritesPage = () => {
  const router = useRouter();

  const { user, loading } = useAuth();
  const [favorites, setFavorites] = useState<Dish[]>([]);

  useEffect(() => {
    if (loading) return; // Wait for auth state to resolve

    if (!user) {
      window.location.href = "/auth";
      return;
    }

    const fetchFavorites = async () => {
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
    };

    fetchFavorites();
  }, [user, loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite dishes yet.</p>
      ) : (
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
            {" "}
            {favorites.map((dish) => (
              <DishCard
                key={dish.id}
                onClick={() => router.push(`/explore/${dish.id}`)}
                dish={dish}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default FavoritesPage;
