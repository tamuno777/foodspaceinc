"use client";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/authcontext";

interface Dish {
  id: string;
  title: string;
  description: string;
  image: string;
  chef: string;
}

const FavoritesPage = () => {
  const { user, loading } = useAuth();
  const [favorites, setFavorites] = useState<Dish[]>([]);

  useEffect(() => {
    if (loading) return; // Wait for auth state to resolve

    if (!user) {
      window.location.href = "/auth";
      return;
    }

    const fetchFavorites = async () => {
      const q = query(collection(db, "favorites"), where("uid", "==", user.uid));
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
        <div>
          {favorites.map((dish) => (
            <div key={dish.id}>
              <h2>{dish.title}</h2>
              <img src={dish.image} alt={dish.title} />
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
