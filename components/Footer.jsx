import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 md:flex md:items-center md:justify-between h-38">
      <div className="flex flex-col items-center px-20">
        <img src='/Lahore101-logos.png' alt="Website Logo" className="h-32 w-auto mr-4" />
        <p>© {new Date().getFullYear()} Lahore 101. All Rights Reserved.</p>
      </div>
      <div className="flex flex-col items-center justify-center space-x-4 mt-4 md:mt-0">
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="h-6 w-6 hover:text-blue-500" />
        </a>
        <a href="https://www.twitter.com/your-page" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="h-6 w-6 hover:text-blue-400" />
        </a>
        <a href="https://www.instagram.com/your-page" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-6 w-6 hover:text-red-500" />
        </a>
      </div>
        <a href="mailto:youremail@example.com" className="hover:underline mt-10 px-20">lahoretourguide@gmail.com</a>
      </div>
     
    </footer>
  );
};

export default Footer;
