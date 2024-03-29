"use client";
import { useGetDocuments } from "../src/GetDocumentsHook";
import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import Loading from "./Loading";
const Places = () => {
  const [places, setPlaces] = useState([]);
  const { getDoc } = useGetDocuments();
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default category
  useEffect(() => {
    getDoc("places").then((data) => setPlaces(data));
  }, []);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredPlaces(places); // Show all places
    } else {
      setFilteredPlaces(places.filter((place) => place.category === category)); // Filter by category
    }
  };
  return (
    <section className="explore-section px-4 py-8 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold mb-4 text-primaryLight">
        Browse Different Categories
      </h2>

      <div className="flex items-center mb-4 gap-6 text-primary text-xl " >
        <button
          className={`hover:text-primaryLight focus:outline-none  ${
            selectedCategory === "all" ? "text-primaryLight" : ""
          }`}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className={` hover:text-primaryLight focus:outline-none ${
            selectedCategory === "historical" ? "text-primaryLight" : ""
          }`}
          onClick={() => handleCategoryChange("historical")}
        >
          Historical
        </button>
        <button
          className={` hover:text-primaryLight focus:outline-none ${
            selectedCategory === "mall" ? "text-primaryLight" : ""
          }`}
          onClick={() => handleCategoryChange("mall")}
        >
          Malls
        </button>
        <button
          className={` hover:text-primaryLight focus:outline-none ${
            selectedCategory === "restaurant" ? "text-primaryLight" : ""
          }`}
          onClick={() => handleCategoryChange("restaurant")}
        >
          Restaurants
        </button>
        <button
          className={` hover:text-primaryLight focus:outline-none ${
            selectedCategory === "park" ? "text-primaryLight" : ""
          }`}
          onClick={() => handleCategoryChange("park")}
        >
          Parks
        </button>
      </div>

      {filteredPlaces.length > 0 ? (
        <ul className="explore-places grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPlaces.map((place) => (
            <li key={place.id}>
              <ImageCard imageSrc={place.imageurls[0]} title={place.name} />
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </section>
  );
};
export default Places;
