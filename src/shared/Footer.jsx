import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center ml-10">
        <div className="md:w-1/2">
          <h3 className="text-white text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-gray-300 mb-2">
            Address: 123 Street, City, Country
          </p>
          <p className="text-gray-300 mb-2">
            Phone: 123-456-7890
          </p>
          <p className="text-gray-300 mb-2">
            Email: info@example.com
          </p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-white text-xl font-bold mb-2">About Us</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pulvinar risus. Phasellus ac maximus ex.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-300">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
