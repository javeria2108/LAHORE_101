'use client'
import React from "react";
import { useGetDocuments } from "./GetDocumentsHook";
import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import Loading from "./Loading";

const TopRated = () => {
  const [topRatedPlaces, setTopRatedPlaces] = useState([]);
  const { getDoc } = useGetDocuments();

  useEffect(() => {
    const fetchTopRatedPlaces = async () => {
      try {
        const fetchedPlaces = await getDoc("places"); // Replace with your logic
        const allReviews = await getDoc("places-reviews"); // Fetch all reviews

        const processedPlaces = fetchedPlaces.map((place) => {
          const placeReviews = allReviews.filter((review) => review.placeid === place.placeid); // Filter reviews for this place
          const averageRating = placeReviews.length > 0
            ? placeReviews.reduce((acc, review) => acc + review.rating, 0) / placeReviews.length
            : 0;
          return { ...place, averageRating };
        });

        const top3Places = processedPlaces.slice(0, 3); // Get the top 3 places
        const sortedTop3 = top3Places.sort((a, b) => b.averageRating - a.averageRating); // Sort the top 3 by averageRating
        setTopRatedPlaces(sortedTop3);
      } catch (error) {
        console.error("Error fetching top-rated places:", error);
      }
    };

    fetchTopRatedPlaces();
  }, []);

  return (
    <section className="top-rated-section px-4 py-8 md:px-8 lg:px-16"> {/* Added section and padding */}
      <h2 className="text-2xl font-bold mb-4">Top Rated Places</h2> {/* Heading with margin */}

      {topRatedPlaces.length > 0 ? (
        <ul className="top-rated-places grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topRatedPlaces.map((place) => (
            <li key={place.id}>
              <ImageCard
                imageSrc={place.imageurls[0]}
                title={place.name}
                averageRating={place.averageRating}
                isTopRated={true}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Loading/>
      )}
    </section>
  );
};

export default TopRated;
