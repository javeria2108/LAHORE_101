"use client";
import { useState, useEffect } from "react";
import { useGetDocuments } from "@/src/GetDocumentsHook";
import { useSession } from "next-auth/react"; // Use useSession hook
import { collection, addDoc } from "@firebase/firestore";
import { db } from "@/lib/firebase-config";
const Comments = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [error, setError]=useState("");
  const [rating, setRating] = useState(0);
  const { getDoc } = useGetDocuments();
  const { data: session } = useSession(); // Get session data from useSession

  const fetchReviews = async () => {
    const reviewsRef = "places-reviews";
    const data = await getDoc(reviewsRef); // Call getDoc from hook
    console.log(data);
    console.log(placeId);
    data.map((item) => console.log(item.placeid));
    const reviewsData = data.filter((item) => item.placeid == placeId); // Find reviews by ID
    console.log(reviewsData);
    setReviews(reviewsData);
  };

  useEffect(() => {
    fetchReviews();
  }, [placeId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!session || !comment || !rating) {
      setError("please select a rating")
      return;} // Validation (check for logged-in user)

    const newReview = {
      username: session.user.name, // Replace with username from session data
      placeid: placeId,
      rating,
      comment,
    };

    // Add new review to Firestore (replace with your Firestore integration)
    const reviewsRef = collection(db, "places-reviews");
    await addDoc(reviewsRef, newReview);

    setComment("Review Submitted! refresh to see your comment");
    setRating(0); 
  };

  return (
    <div className="comments bg-bgDark p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-primaryLight">Reviews</h2>
      <ul className="list-none space-y-4">
        {reviews.length === 0 && (
          <li className="text-primary">
            No reviews yet. Be the first to leave one! You need to sign in to leave review
          </li>
        )}
        {reviews.map((review) => (
          <li
            key={review.id}
            className="flex flex-col border border-gray-300 rounded-lg p-4 space-y-2"
          >
            <div className="flex items-center space-x-2">
              <span className="font-bold text-primaryDark">{review.username}</span>
              <span className="text-primaryLight text-sm">
                ({review.rating} stars)
              </span>
            </div>
            <p className="text-primaryLight">{review.comment}</p>
          </li>
        ))}
      </ul>

      {session && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2 text-primaryLight">Leave your review</h3>
          <form
            onSubmit={handleSubmitComment}
            className="flex flex-col space-y-2"
          >
            <textarea
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primaryDark resize-none
              bg-bgcolor text-primaryLight"
              placeholder="Write your comment..."
              value={comment}
              onChange={handleCommentChange}
              rows={5}
            />
            <div className="flex items-center space-x-2">
              <label htmlFor="rating" className="text-primaryLight">Rating:</label>
              <select
                id="rating"
                value={rating}
                onChange={handleRatingChange}
                className="border rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-primaryDark
                bg-bgcolor"

              >
                <option value="0">0 stars</option>
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
              </select>
            </div>
            <button onClick={handleSubmitComment} className="btn-primary px-4 py-2 bg-bgcolor hover:bg-primaryLight w-40 m-auto rounded-lg text-primaryDark">
              Submit Review
            </button>
            <p className=" text-red-800">{error}</p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Comments;
