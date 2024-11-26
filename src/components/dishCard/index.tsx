"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "@/context/authcontext";
import { addFavorite } from "@/services/favouriteService";

interface Dish {
  id: string;
  title: string;
  description?: string;
  image?: string;
  chef?: string;
}

interface DishCardProps {
  dish: Dish;
  onClick: () => void;

}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { user } = useAuth(); // Get the authenticated user
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = async () => {
    if (!user) {
      alert("Please log in to add to favorites.");
      window.location.href = "/auth"; // Redirect to login page if not logged in
      setIsFavorited(false)
      return;
    }

 
  try {
    await addFavorite(user.uid, dish); // Pass user.uid as `uid`
    alert("Added to favorites!");
  } catch (error) {
    console.error("Error adding to favorites:", error);
    alert("Failed to add to favorites. pls log in");
  }
};
  
  return (
    <Card className="w-full rounded-lg shadow-md flex flex-col">
    <img src={dish.image} alt={dish.title} className="w-full h-32 object-cover rounded-t-lg" />
    <CardHeader>
      <CardTitle>{dish.title}</CardTitle>
      <CardDescription>{dish.chef || "Unknown Chef"}</CardDescription>
    </CardHeader>
    <CardContent  className="w-64 h-[10rem] overflow-hidden">
    <p className="truncate-text">{dish.description || "No description available."}</p>
    </CardContent>
    <div className="flex justify-end p-2">
      {isFavorited ? (
        <AiFillHeart className="text-red-500 cursor-pointer" />
      ) : (
        <AiOutlineHeart className="cursor-pointer" onClick={handleFavorite} />
      )}
    </div>
  </Card>
  
  );
};

export default DishCard;
