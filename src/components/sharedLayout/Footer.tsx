"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold">Recipe App</h3>
            <p className="text-gray-400 mt-2">
              Your go-to platform for exploring, sharing, and creating recipes. Bringing food lovers together!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 mt-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-pink-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dev"
                  className="hover:text-pink-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="hover:text-pink-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/dev"
                  className="hover:text-pink-400 transition-colors"
                >
                  Dev
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold">Contact Us</h4>
            <p className="text-gray-400 mt-2">
              Email: support@recipeapp.com
            </p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Recipe App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
