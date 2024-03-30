"use client";
import { useGetDocuments } from "@/src/GetDocumentsHook"; // Import custom hook
import { useState, useEffect } from "react";
import Comments from "@/components/Comments";
import Carousel from "@/components/Carousel";
import Loading from "@/components/Loading";

const PlaceDetails = ({ params }) => {
  const placeId = params.id;
  const { getDoc } = useGetDocuments(); // Destructure getDoc function from hook

  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      const placeRef = "place-description"; // Hardcoded collection name
      const data = await getDoc(placeRef); // Call getDoc from hook
      data.map((item) => console.log(item.placeid == placeId));
      const place = data.find((item) => item.placeid == placeId); // Find place by ID

      if (place) {
        setPlaceDetails(place);
      } else {
        console.error("Place not found");
      }
    };

    if (placeId) {
      fetchPlaceDetails();
    }
  }, [placeId]);

  if (!placeDetails) {
    return <Loading/>;
  }
  const imageUrls = placeDetails.imageurls;
  console.log(imageUrls);

  return (
    <div className="container mx-auto px-4 py-8 md:px-8">
      {/* Full-width first image with H1 text overlay */}
      <div className="relative mb-4">
        <h1
          className="text-xl md:text-3xl font-bold text-white z-10 absolute top-0 left-0 p-16 bg-gradient-to-b from-black
          opacity-80 w-full" // Update position classes
        >
          {placeDetails.h1}
        </h1>
        <img
          className="object-cover w-full h-64 md:h-auto rounded-lg" // Adjust height for non-full width
          src={imageUrls[0]}
          alt={placeDetails.h1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80"></div> {/* Gradient overlay */}
      </div>
      <div className="flex items-center w-3/4 justify-center m-auto">
<Carousel placeDetails={placeDetails}/>
</div>
<div className="flex flex-col items-center w-3/4 justify-center m-auto gap-8 p-10 bg-bgDark bg-opacity-70
mt-10">
<h1
          className="text-xl md:text-3xl font-bold text-primaryLight w-full" // Update position classes
        >
          {placeDetails.h5}
        </h1>
        <ul className="list-disc text-white">
              {placeDetails.p5.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            </div>
<div className="mt-20">
      {/* Comments component */}
      <Comments placeId={placeId}/>
      </div>
    </div>
  );
};

export default PlaceDetails;
