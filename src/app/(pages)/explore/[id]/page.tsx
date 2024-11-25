"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

interface Dish {
  id: string;
  title: string;
  description?: string;
  content?: string;
  image?: string;
  chef?: string;
}

const DishDetailsPage: React.FC = () => {
  const [dish, setDish] = useState<Dish | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();
  const id = params?.id as string; 

  useEffect(() => {
    if (!id) return;

    const fetchDish = async () => {
      try {
        const docRef = doc(db, "dishes", id); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDish({ ...(docSnap.data() as Dish), id: docSnap.id });
        } else {
          setError(true); 
        }
      } catch (err) {
        console.error("Error fetching dish details:", err);
        setError(true); 
      } finally {
        setLoading(false);
      }
    };

    fetchDish();
  }, [id]);

  if (loading) {
    return <p>Loading dish details...</p>;
  }

  if (error || !dish) {
    return <h1>Dish not found (404)</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
  {/* Hero Section */}
  <div className="relative w-full h-64 md:h-96">
    <img
      src={dish.image}
      alt={dish.title}
      className="absolute inset-0 object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h1 className="text-3xl md:text-5xl text-white font-bold">{dish.title}</h1>
    </div>
  </div>

  {/* Content Section */}
  <div className="w-full max-w-4xl p-6 md:p-10 bg-pink-200 rounded-lg shadow-lg -mt-12 z-10">
    <div className="flex flex-col gap-6">
      {/* Chef Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-lg font-semibold text-gray-700">Chef</p>
        <h2 className="text-2xl font-bold text-gray-900">{dish.chef || "Unknown"}</h2>
      </div>

      {/* Dish Description */}
      <div className="flex-grow text-center md:text-left">
        <p className="text-lg text-gray-700">{dish.description || "No description available."}</p>
      </div>
      <div className="flex-grow text-center md:text-left">
        <p className="text-lg text-gray-700">{dish.content || "No content available."}</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default DishDetailsPage;
