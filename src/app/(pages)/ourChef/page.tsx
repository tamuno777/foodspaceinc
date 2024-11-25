import React from "react";

const chefs = [
  {
    id: 1,
    name: "Chef John Doe",
    bio: "An award-winning pastry chef with over 15 years of experience. Known for his innovative dessert recipes that blend traditional flavors with modern techniques.",
    specialty: "Dessert",
    image: "https://i.pinimg.com/474x/87/cb/ca/87cbca3b19212fa120d706d8c0be593f.jpg",
  },
  {
    id: 2,
    name: "Chef Jane Smith",
    bio: "A passionate vegan chef who believes in the power of plant-based diets. Jane has traveled the world to learn unique techniques and local vegan recipes.",
    specialty: "Vegan",
    image: "https://i.pinimg.com/474x/f2/e3/d1/f2e3d12eda553b9cbbf07d9e7a88f406.jpg",
  },
  {
    id: 3,
    name: "Chef Pedro Sanchez",
    bio: "With a deep love for his heritage, Pedro creates local dishes that fuse traditional flavors with contemporary presentations. His signature dishes are a hit at food festivals.",
    specialty: "Local Dishes",
    image: "https://i.pinimg.com/474x/80/dd/04/80dd04741c217840d5fc8c6d708bd9e8.jpg",
  },
  {
    id: 4,
    name: "Chef Aisha Bello",
    bio: "A culinary artist specializing in world cuisine. Aisha's philosophy is to bring cultures together through food, creating unforgettable dining experiences.",
    specialty: "World Dishes",
    image: "https://i.pinimg.com/474x/66/14/a3/6614a3ff3824042328a2ef5a65b489de.jpg",
  },
  {
    id: 5,
    name: "Chef Marco Polo",
    bio: "A dessert connoisseur who draws inspiration from his Italian roots. Marco's gelatos and tiramisus are legendary in the culinary world.",
    specialty: "Dessert",
    image: "https://i.pinimg.com/474x/a8/3b/76/a83b76c1d6686c5059345ba0c599aa96.jpg",
  },
  {
    id: 6,
    name: "Chef Meno Wong",
    bio: "Known for her creative Asian vegan recipes, Meno is a chef who transforms simple ingredients into delightful works of art, embracing health and taste.",
    specialty: "Vegan",
    image: "https://i.pinimg.com/474x/1e/3b/26/1e3b26a3ca0c079d838a7efcf1b3bd61.jpg",
  },
  {
    id: 7,
    name: "Chef Liam Brown",
    bio: "An advocate of preserving traditional culinary techniques, Liam's dishes are a celebration of heritage and authenticity, with a modern twist.",
    specialty: "Local Dishes",
    image: "https://i.pinimg.com/474x/19/0a/2e/190a2e7bb8e9afc6996171e8c792a254.jpg",
  },
  {
    id: 8,
    name: "Chef Isabella Rossi",
    bio: "A global chef whose passion for international cuisine has made her a household name. Isabella’s menu reflects a medley of global inspirations.",
    specialty: "World Dishes",
    image: "https://i.pinimg.com/474x/93/42/32/934232ee3cb2dbed5aec17010ec2ef0a.jpg",
  },
  {
    id: 9,
    name: "Chef Ahmed Khan",
    bio: "A Middle Eastern dessert specialist, Ahmed creates sweet treats infused with spices and nuts, offering a taste of Arabian luxury.",
    specialty: "Dessert",
    image: "https://i.pinimg.com/474x/d6/4c/d9/d64cd9cb0bebef18d302f9ffb8fdf833.jpg",
  },
  {
    id: 10,
    name: "Chef Emily Turner",
    bio: "Emily's passion for sustainability drives her vegan recipes. She focuses on eco-friendly cooking practices while delivering gourmet experiences.",
    specialty: "Vegan",
    image: "https://i.pinimg.com/474x/a9/34/77/a93477238062f92188431c999f153ece.jpg",
  },
];

const OurChef = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Chefs</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
          >
            <div className="bg-pink-200 w-full flex justify-center rounded-lg item-center align-center">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            </div>
            <h2 className="text-xl font-semibold mb-2">{chef.name}</h2>
            <p className="text-gray-600 text-center mb-2">{chef.bio}</p>
            <span className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm">
              {chef.specialty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurChef;
