// import { db } from "../firebase/firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";

// // Define the Dish type
// interface Dish {
//   id: string;
//   title: string;
//   description?: string;
//   image?: string;
//   chef?: string;
// }

// export const submitDish = async (uid: string, dish: Dish) => {
//   const submitRef = collection(db, "submitedDishes");
//   await addDoc(submitRef, { uid, ...dish }); // Use the uid passed as a parameter
// };

