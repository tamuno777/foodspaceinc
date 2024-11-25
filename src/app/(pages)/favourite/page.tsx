"use client"
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
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Dish[]>([]); // Explicitly define the type for state

  useEffect(() => {
    if (!user) {
      window.location.href = "/auth";
      return;
    }

    const fetchFavorites = async () => {
      const q = query(collection(db, "favorites"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      const fetchedFavorites: Dish[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Dish[]; // Casting to the correct type

      setFavorites(fetchedFavorites); // Set the favorites array with the correct type
    };

    fetchFavorites();
  }, [user]);

  if (!user) return <p>Please log in to view your favorites.</p>;

  return (
    <div>
      <h1>Your Favorites</h1>
      <div>
        {favorites.length === 0 ? (
          <p>No favorite dishes yet.</p>
        ) : (
          favorites.map((dish) => (
            <div key={dish.id}>
              <h2>{dish.title}</h2>
              <img src={dish.image} alt={dish.title} />
              <p>{dish.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
