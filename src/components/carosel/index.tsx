"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import banner1 from "../../../public/banner1.avif"
import banner2 from "../../../public/banner2.avif"
import banner3 from "../../../public/banner3.avif"
import banner4 from "../../../public/banner4.avif"
import banner5 from "../../../public/banner5.avif"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { title } from "process";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = [
  {
    img:banner1,
    title:"Ultimate Vegan diet ",
    description:"A handfull of simple ingredients typify the fresh ,vibrant flavour of vegan dishes"
  },
  {
    img:banner2,
    title:"seasoned spicy Chicken dish ",
    description:"A handfull of simple ingredients typify the fresh ,vibrant flavour of greek cooking"
  },
  {
    img:banner3,
    title:"delicious creamy desert dish ",
    description:"A handfull of simple ingredients typify the fresh ,vibrant flavour of greek cooking"
  },
  {
    img:banner4,
    title:"delicious ponded yam and african soup  ",
    description:"A handfull of simple ingredients typify the fresh ,vibrant flavour of aftrican cooking"
  },
  {
    img:banner5,
    title:"delicious joloff rice and well seasoned kiwe  ",
    description:"A handfull of simple ingredients typify the fresh ,vibrant flavour of aftrican cooking"
  },
  ];
  return (
    <div className="">
      <Carousel
        plugins={[plugin.current]}
        className="w-full  "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent style={{height:"450px",width:"100vw"}}>
          
           {images.map((content, index) => (
          <CarouselItem key={index}>
            <div className="p-1 ">
            <Card style={{height:"400px" }} className="relative overflow-hidden">
                <CardContent className="relative h-full">
                  <Image
                    src={content.img}
                    alt={`Carousel Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />

                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex flex-col flex-wrap items-center justify-center bg-black/20 text-white text-center p-4 rounded-lg">
                    <h1 className=" font-bold mb-2" style={{fontSize:"50px", width:"50%",display:"flex",flexWrap:"wrap"}}>
                      {content.title}
                    </h1>
                    <p className="text-md">{content.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
