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
      {/* Full-width first image with H1 text overlay (use client for server components) */}
      <div className="relative mb-4"> {/* Make sure this closing tag exists */}
        <h1 className="text-3xl font-bold text-white z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          {placeDetails.h1}
        </h1>
        <img
          className="object-cover w-full h-64 md:h-auto rounded-lg" // Adjust height for non-full width
          src={imageUrls[0]}
          alt={placeDetails.h1}
        />
      </div>

      {/* First Paragraph (full width) */}
      <p className="text-gray-700 mb-4">{placeDetails.p1}</p>

      {/* Remaining Content (flexbox rows) */}
      {Object.entries(placeDetails)
        .filter(([key]) => key.startsWith('h') && key !== 'h1')
        .map(([key, value], index) => (
          <div key={key} className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            {/* Heading and Paragraph (Left) on smaller screens, stacked on larger */}
            <div className="w-full md:w-1/2 order-1 md:order-none">
              <h2 className="text-2xl font-bold mb-2">{value}</h2>
              <ul className="list-disc pl-4">
                {placeDetails[`p${key.slice(1)}`].map((item) => (
                  <li key={item} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image (Right) */}
            {imageUrls[index + 1] && (
              <img
                key={imageUrls[index + 1]}
                className="object-cover w-full md:w-1/2 h-48 md:h-auto rounded-lg shadow-md order-2 md:order-none"
                src={imageUrls[index + 1]}
                alt="Place Image"
              />
            )}
          </div>
        ))}

      {/* Full-width H5 */}
      {placeDetails.h5 && (
        <h2 className="text-2xl font-bold mb-2">{placeDetails.h5}</h2> // Use h2 for consistency

      )}
       <ul className="list-disc pl-4 w-full">
                {placeDetails.p5.map((item) => (
                  <li key={item} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
    </div>
  );
}

export default PlaceDetails;
