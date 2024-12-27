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
import { FaWindowClose } from "react-icons/fa";
import { FcLike, FcMenu } from "react-icons/fc";
import { useAuth } from "@/context/authcontext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth(); // Access user from Auth context

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
          <a href="/" className="text-xl font-bold lg:pl-0 pl-4">
            ODD Recipe
          </a>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
              <FaWindowClose style={{ fontSize: "20px", color: "black" }}/>
            ) : (
                <FcMenu style={{ fontSize: "30px", color: "black" }} />
              )}
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
                <NavigationMenuLink className="px-2 m-1" href="/ourChef">
                  Our Chefs
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/Contact">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/dev">
                  Dev
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/favourite">
                  <FcLike style={{ fontSize: "25px" }} />
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuLink className="px-2 m-1" href="/auth"> */}
              {user && user.photoURL ? (
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-2 m-1" href="/user">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-6 h-6 rounded-full"
                    />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-2 m-1" href="/auth">
                    <button className="text-gray-700">Login</button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {isMobileMenuOpen && (
        // <div className="md:hidden bg-pink-200 ">
        <div className="fixed inset-y-0 right-0 w-1/2 md:hidden bg-pink-200 shadow-lg z-50 transform transition-transform duration-300">
       
          <div className="flex flex-col space-y-2 p-4">
          <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
              <FaWindowClose style={{ fontSize: "20px", color: "black" }}/>
            ) : (
                <FcMenu style={{ fontSize: "30px", color: "black" }} />
              )}
            </button>
            <a href="/" className="block py-2 text-gray-700">
              Home
            </a>
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

            <a href="/ourChef" className="block py-2 text-gray-700">
              Our Chefs
            </a>
            <a href="/favourite" className="block py-2 text-gray-700">
              <FcLike style={{ fontSize: "25px" }} />
            </a>
            <a href="/Contact" className="block py-2 text-gray-700">
              Contact
            </a>
            <a href="/dev" className="block py-2 text-gray-700">
              Dev
            </a>
            {user && user.photoURL ? (
              <a href="/user" className="block py-2 text-gray-700">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-6 h-6 rounded-full"
                />
              </a>
            ) : (
              <a href="/auth" className="block py-2 text-gray-700">
                <button className="text-gray-700">Login</button>
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
