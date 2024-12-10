"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import DishCard from "@/components/dishCard";
import { addFavorite, removeFavorite } from "@/services/favouriteService";

export interface Dish {
  id: string;
  title: string;
  description?: string;
  image?: string;
  chef?: string;
  category: string;
  content?: string;
}

const FavoritesPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [favorites, setFavorites] = useState<Dish[]>([]);

  const fetchFavorites = async () => {
    if (!user) return;

    try {
      const q = query(collection(db, "favorites"), where("uid", "==", user.uid));
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

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="flex justify-center items-center p-5">
        <strong>Hello {user?.displayName},</strong>
      </h1>
      {favorites.length === 0 ? (
        <p className="flex justify-center items-center p-5">No favorite dishes yet.</p>
      ) : (
        <section className="bg-pink-200 w-full flex justify-center items-center flex-col p-5">
          <div className="grid gap-6 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 rounded-lg">
            {favorites.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onClick={() => router.push(`/explore/${dish.id}`)}
                isFavorited={favorites.some((fav) => fav.id === dish.id)}
                onFavoriteToggle={() => handleFavoriteToggle(dish)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default FavoritesPage;
