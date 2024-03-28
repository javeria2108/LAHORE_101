"use client";
import { useGetDocuments } from "../src/GetDocumentsHook";
import { useState,useEffect } from "react";
import ImageCard from "./ImageCard";
import Loading from "./Loading";
const Places = () => {
  const [places, setPlaces] = useState([]);
  const { getDoc } = useGetDocuments();

  useEffect(() => {
    getDoc("places").then((data) => setPlaces(data));
  }, []);

  return (
    <section className="explore-section px-4 py-8 md:px-8 lg:px-16"> {/* Added section and padding */}
      <h2 className="text-2xl font-bold mb-4 text-primaryLight">Browse Different Categories</h2> {/* Heading with margin */}

      {places.length > 0 ? (
        <ul className="explore-places grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {places.map((place) => (
            <li key={place.id}>
              <ImageCard imageSrc={place.imageurls[0]} title={place.name} />
            </li>
          ))}
        </ul>
      ) : (
        <Loading/>
      )}
    </section>
  );
};
export default Places