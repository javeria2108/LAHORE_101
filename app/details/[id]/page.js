'use client'
import { useGetDocuments } from "@/src/GetDocumentsHook";// Import custom hook
import { useState,useEffect } from "react";

const PlaceDetails = ({params}) => {
  const  placeId = params.id
  const { getDoc } = useGetDocuments(); // Destructure getDoc function from hook

  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      const placeRef = 'place-description'; // Hardcoded collection name
      const data = await getDoc(placeRef); // Call getDoc from hook

      const place = data.find((item) => item.placeid === placeId); // Find place by ID

      if (place) {
        setPlaceDetails(place);
      } else {
        console.error('Place not found');
      }
    };

    if (placeId) {
      fetchPlaceDetails();
    }
  }, [placeId]);

  if (!placeDetails) {
    return <div>Loading...</div>;
  }
  const imageUrls = placeDetails.imageurls;
  return (
    <div className="container mx-auto px-4 py-8 md:px-8">
      {/* Full-width first image with H1 text overlay */}
      <div className="relative">
        <h1 className="text-3xl font-bold text-white z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          {placeDetails.h1}
        </h1>
        {imageUrls && imageUrls.length > 0 && (
          <img
            className="object-cover w-full h-full rounded-lg absolute top-0 left-0"
            src={imageUrls[0]}
            alt={placeDetails.h1}
          />
        )}
      </div>

      {/* Remaining Content - Alternate Image and Paragraph Sections */}
      {imageUrls &&
        imageUrls.slice(1).map((imageUrl, index) => (
          <div key={imageUrl} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Paragraph */}
            <div className={`md:${index % 2 === 0 ? 'order-2' : ''}`}>
              <p className="text-gray-700 mt-8">{placeDetails[`p${index + 2}`]}</p>
            </div>

            {/* Image */}
            <div className={`md:${index % 2 === 0 ? 'order-1' : ''}`}>
              <img
                key={imageUrl}
                className="object-contain h-48 md:h-auto rounded-lg shadow-md w-full md:w-1/2"
                src={imageUrl}
                alt="Place Image"
              />
            </div>
          </div>
        ))}

      {/* Remaining paragraphs after images (if any) */}
      {placeDetails.p1 && (
        <p className="text-gray-700 mt-8">{placeDetails.p1}</p>
      )}

      {/* Remaining content (headings and bullet points) */}
      {Object.entries(placeDetails)
        .filter(([key]) => key.startsWith('h') && key !== 'h1')
        .map(([key, value]) => (
          <div key={key} className="mt-8">
            <h2 className="text-2xl font-bold mb-2">{value}</h2>
            <ul className="list-disc pl-4">
              {placeDetails[`p${key.slice(1)}`].map((item) => (
                <li key={item} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default PlaceDetails;
