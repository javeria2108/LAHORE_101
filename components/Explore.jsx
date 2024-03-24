"use client";
import { useGetDocuments } from "./GetDocumentsHook";
import { useState,useEffect } from "react";
import ImageCard from "./ImageCard";
const Places = () => {
  const [places, setPlaces] = useState([]);
  const { getDoc } = useGetDocuments();

  useEffect(() => {
    getDoc("places").then((data) => setPlaces(data));
  }, []);

  return (
    <div>
      {places.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
          {places.map((place) => (
            <li key={place.id}> {/* Use a unique key for each place */}
              <ImageCard imageSrc={place.imageurls[0]} title={place.name} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading places...</p>
      )}
    </div>
  );
};
export default Places