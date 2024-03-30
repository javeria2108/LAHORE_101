import React from 'react';
import { AiFillMapMarker, AiFillPhone, AiFillMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:flex md:flex-wrap md:justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <AiFillMapMarker className="text-gray-500 mr-2" />
              <span>Lahore, Pakistan</span>
            </li>
            <li className="flex items-center">
              <AiFillPhone className="text-gray-500 mr-2" />
              <a href="tel:+92421234567" className="hover:text-blue-500">
                (+92) 42-1234567
              </a>
            </li>
            <li className="flex items-center">
              <AiFillMail className="text-gray-500 mr-2" />
              <a href="mailto:contact@lahore101.com" className="hover:text-blue-500">
                contact@lahore101.com
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4">
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
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
