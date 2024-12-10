"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./index.css";

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
  isFavorited?: boolean;
  onFavoriteToggle: () => void;
}

const DishCard: React.FC<DishCardProps> = ({
  dish,
  onClick,
  isFavorited,
  onFavoriteToggle,
}) => (
  <Card className="cursor-pointer w-full rounded-lg shadow-md flex flex-col justify-between ">
    <div onClick={onClick}>
      <img
        src={dish.image || "/default-image.png"}
        alt={dish.title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
    </div>
    <CardHeader onClick={onClick}>
      <CardTitle className="my-3">{dish.title}</CardTitle>
      <CardDescription className=" my-3 text-bold">
       <strong>CHEF </strong> {dish.chef}
      </CardDescription>{" "}
    </CardHeader>
    <CardContent className=" h-[10rem] overflow-hidden">
      <CardDescription className="truncate-text my-3 ">
        {dish.description}
      </CardDescription>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex justify-end p-2"
      >
        {isFavorited ? (
          <AiFillHeart onClick={onFavoriteToggle} color="red" />
        ) : (
          <AiOutlineHeart onClick={onFavoriteToggle} />
        )}
      </div>
    </CardContent>
  </Card>
);

export default DishCard;
