// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation"; // Correctly fetch pathname
// import { db } from "../../../firebase/firebaseConfig";
// import { doc, getDoc } from "firebase/firestore";

// export interface Dish {
//   id: string;
//   title: string;
//   description?: string;
//   image?: string;
//   chef?: string;
// }

// const DishDetailsPage: React.FC = () => {
//   const pathname = usePathname(); // Fetch the current path
//   const id = pathname?.split("/").pop(); // Extract 'id' from the URL
//   const [dish, setDish] = useState<Dish | null>(null);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (!id) return;

//     const fetchDish = async () => {
//       try {
//         const docRef = doc(db, "dishes", id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setDish({ ...(docSnap.data() as Dish), id: docSnap.id });
//         } else {
//           setError(true);
//         }
//       } catch (error) {
//         console.error("Error fetching dish details:", error);
//         setError(true);
//       }
//     };

//     fetchDish();
//   }, [id]);

//   if (error) {
//     return <h1 className="text-center text-2xl mt-10">Dish not found (404)</h1>;
//   }

//   if (!dish) {
//     return <p>Loading dish details...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold">{dish.title}</h2>
//       <p>Chef: {dish.chef || "Unknown"}</p>
//       <img
//         src={dish.image}
//         alt={dish.title}
//         className="w-full h-auto rounded-lg"
//       />
//       <p className="mt-4">{dish.description || "No description available."}</p>
//     </div>
//   );
// };

// export default DishDetailsPage;
