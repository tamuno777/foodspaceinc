import Image from "next/image";
import styles from "./page.module.css";
import { CarouselPlugin } from "@/components/carosel";
import HomeCategory from "@/components/homecategory";
import LatestDish from "@/app/(pages)/explore/latestdishes";
import FoodGallery from "@/components/foodgallary";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      
        <CarouselPlugin />
        <div style={{width:"100%"}}>
          <HomeCategory/>
        </div>
        <div style={{width:"100%"}}>
          <LatestDish />
        </div>
        <div style={{width:"100%"}}>
          <FoodGallery />
        </div>
      
    </div>
  );
}
