import React from "react";
import { FaMap, FaPhone, FaEnvelope } from "react-icons/fa";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "@/lib/firebase-config";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false); // State for success message
  const [error, setError] = useState(null); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newMessage = {
        name,
        email,
        message,
      };

      const messagesRef = collection(db, "messages"); // Reference to messages collection
      await addDoc(messagesRef, newMessage); // Add message to Firestore

      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message. Please try again.");
    }
  };
  return (
    <div className="px-10 py-16 text-primaryLight">
      <div className="container mx-auto px-4 md:flex md:flex-wrap md:justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <FaMap className="text-gray-500 mr-2" />
              <span>Lahore, Pakistan</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="text-gray-500 mr-2" />
              <a href="tel:+92421234567" className="hover:text-blue-500">
                (+92) 42-1234567
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-gray-500 mr-2" />
              <a
                href="mailto:contact@lahore101.com"
                className="hover:text-blue-500"
              >
                lahore101@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-sm">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primaryDark hover:bg-primary text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
            {success && <p className="text-green-500">{success}</p>}
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
