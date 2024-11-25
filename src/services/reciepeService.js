import axios from "axios";

// Ensure your API key is correct and has no leading or trailing spaces
const API_KEY = "7b17520c623e493398e06e9a214be157";

export const fetchDishes = async (category) => {
  // Construct the URL with parameters as needed
  const url = `https://api.spoonacular.com/recipes/random?number=5&include-tags=${category}&exclude-tags=quinoa&apiKey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    // Access the recipes from the response data
    return response.data.recipes; // Adjust based on the actual structure of the response
  } catch (error) {
    console.error("Error fetching dishes:", error);
    throw new Error("Failed to fetch dishes. Please try again later.");
  }
};
