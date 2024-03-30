import { db } from "@/lib/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const useGetDocuments = () => {
  const getDoc = async (path) => {
    const collectionRef = collection(db, path);
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  };

  return { getDoc };
};
