"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
// import SubmitDishForm from "../../(pages)/submitRecipie";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center md:justify-center justify-between p-2 w-full bg-pink-200"
          style={{ width: "100vw" }}
        >
          <a href="/" className="text-xl font-bold">
            ODD Recipe 
          </a>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div className="hidden md:flex w-full  md:items-center md:justify-center ">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex justify-center w-full space-x-4 py-1">
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 m-1">
                  Recipes
                </NavigationMenuTrigger>
                <NavigationMenuContent className="px-2 flex flex-col bg-white border rounded-lg shadow-md">
                  <NavigationMenuLink className="px-2 my-1" href="/Local">
                    Local Dishes
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="px-2 my-1"
                    href="/international"
                  >
                    International Cuisine
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-2 my-1" href="/vegan">
                    Vegan
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-2 my-1" href="/desserts">
                    Desserts
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/submitRecipie">
                  Submit Recipe
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/ourChef">
                  Our Chef
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/Contact">
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/dev">
                  Dev
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/favourite">
                  Favourites
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/auth">
                  Auth pls
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-2 p-4">
            <a href="/" className="block py-2 text-gray-700">
              Home
            </a>
            <button className="text-gray-700">Recipes</button>
            <div className="pl-4 flex flex-col space-y-2">
              <a href="/Local" className="block py-2">
                Local Dishes
              </a>
              <a href="/international" className="block py-2">
                International Cuisine
              </a>
              <a href="/vegan" className="block py-2">
                Vegan
              </a>
              <a href="/desserts" className="block py-2">
                Desserts
              </a>
            </div>
            <a href="/submitRecipie" className="block py-2 text-gray-700">
              Submit Recipe
            </a>
            <a href="/ourChef" className="block py-2 text-gray-700">
              Our Chef
            </a>
            <a href="/favourite" className="block py-2 text-gray-700">
              Favourites
            </a>
            <a href="/Contact" className="block py-2 text-gray-700">
              Contact Us
            </a>
            <a href="/dev" className="block py-2 text-gray-700">
              Dev
            </a>
            <a href="/auth" className="block py-2 text-gray-700">
            auth
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
