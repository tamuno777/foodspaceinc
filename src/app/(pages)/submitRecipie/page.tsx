"use client";

import { useState } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const SubmitDishForm = () => {
  const [dish, setDish] = useState({
    title: "",
    chef: "",
    description: "",
    image: "",
    content: "",
    category: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!dish.title || !dish.description || !dish.image || !dish.category) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      const collectionRef = collection(db, "dishes");
      await addDoc(collectionRef, dish);
      alert("Dish submitted successfully!");
      setDish({
        title: "",
        chef: "",
        description: "",
        image: "",
        content: "",
        category: "",
      });
    } catch (error) {
      console.error("Error adding dish: ", error);
      alert("Failed to submit dish.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-5">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Submit a New Dish
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dish Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Dish Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter dish name"
            value={dish.title}
            onChange={(e) => setDish({ ...dish, title: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
        </div>

        {/* Chef Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Chef Name
          </label>
          <input
            type="text"
            placeholder="Enter chef name"
            value={dish.chef}
            onChange={(e) => setDish({ ...dish, chef: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Write a brief description"
            value={dish.description}
            onChange={(e) => setDish({ ...dish, description: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Image URL <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter image URL"
            value={dish.image}
            onChange={(e) => setDish({ ...dish, image: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Content
          </label>
          <textarea
            placeholder="Add additional content or instructions"
            value={dish.content}
            onChange={(e) => setDish({ ...dish, content: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            value={dish.category}
            onChange={(e) => setDish({ ...dish, category: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="vegan">Vegan</option>
            <option value="dessert">Dessert</option>
            <option value="local-dish">Local Dishes</option>
            <option value="world-plate">World Dishes</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-4 py-2 text-white font-bold rounded-lg transition-all ${
            isSubmitting
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Dish"}
        </button>
      </form>
    </div>
  );
};

export default SubmitDishForm;
