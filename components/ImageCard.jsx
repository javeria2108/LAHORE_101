import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ImageCard = ({ imageSrc, title, averageRating, isTopRated, placeid }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md cursor-default">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition duration-300 ease-in-out"
      />
      <div className="p-4 absolute inset-0 bg-gradient-to-t from-gray-900 flex flex-col justify-end">
        {/* Title and rating displayed below image by default */}
        <div className="mb-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          {isTopRated && (
            <div className="flex items-center text-white text-sm">
              {averageRating !== null ? (
                <>
                  <FaStar className="w-5 h-5 mr-2 text-yellow-500" />
                  <span>{averageRating.toFixed(1)}</span>
                </>
              ) : (
                <span>No Reviews</span>
              )}
            </div>
          )}
        </div>

        {/* "Show details" text displayed only on hover, centered on image */}
        <Link href={`/details/${placeid}`}>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs bg-gradient-to-b from-gray-900 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
        >
          See details
        </span>
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
