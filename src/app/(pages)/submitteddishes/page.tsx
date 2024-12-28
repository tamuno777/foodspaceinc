"use client";

import Sidebar from "@/components/profileSidebar";
import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import DishCard from "@/components/dishCard";

interface Dish {
  id: string;
  title: string;
  description?: string;
  image?: string;
  chef?: string;
  userId?: string;
}

const MyDish = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loadingDishes, setLoadingDishes] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchDishes = async () => {
        try {
          const dishesCollection = collection(db, "dishes");
          const q = query(dishesCollection, where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);

          const userDishes: Dish[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Dish[];

          setDishes(userDishes);
        } catch (error) {
          console.error("Error fetching dishes: ", error);
        } finally {
          setLoadingDishes(false);
        }
      };

      fetchDishes();
    }
  }, [user]);

  if (loading || loadingDishes) {
    return <div>Loading....</div>;
  }

  if (!user) {
    router.push("/auth");
    return null;
  }

  return (
    <div className="flex min-h-screen">
    {/* Sidebar */}
    <div className="bg-gray-800 text-white  min-h-screen">
      <Sidebar onNavigate={(route: string) => router.push(route)} />
    </div>
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-hidden">
        <h1 className="text-2xl font-bold mb-6">My Dishes</h1>
        {dishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {dishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onClick={() => router.push(`/dish/${dish.id}`)} // Navigate to dish details
                isFavorited={false} // Implement favorite logic if required
                onFavoriteToggle={() => console.log("Toggle favorite")}
              />
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-center">No dishes submitted yet.</div>
        )}
      </div>
    </div>
  );
};

export default MyDish;
