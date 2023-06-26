/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import photo from '../assets/ozkan-guner-aFqSRokmw2E-unsplash.jpg';

const About = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const buttonData = [
    {
      id: 1,
      text: 'Medical counseling',
      additionalText: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, urna non pellentesque sollicitudin, felis lorem porta nibh, suscipit lacinia ante augue venenatis nibh. Nullam tristique ornare lorem at',
    },
    {
      id: 2,
      text: 'Diagnostic Information',
      additionalText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, urna non pellentesque sollicitudin, felis lorem porta nibh, suscipit lacinia ante augue venenatis nibh. Nullam tristique ornare lorem at',
    },
    {
      id: 3,
      text: 'Booking Information',
      additionalText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, urna non pellentesque sollicitudin, felis lorem porta nibh, suscipit lacinia ante augue venenatis nibh. Nullam tristique ornare lorem at',
    },
  ];

  return (
        <div className="flex flex-col md:flex-row items-center justify-center">
             <div className="md:w-1/2 self-center flex justify-center">
            <img className="w-3/4 ml-10 py-10 mt-10" src={photo} alt="Photo" />
          </div>
          <div className="md:w-1/2 ml-6">
            <h1 className="text-3xl font-bold mb-4 w-1/3">About <span className='text-gray-400' >Clinic</span></h1>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum sem non sapien condimentum aliquet. Nulla facilisi. Mauris efficitur dolor dolor, id porta nulla interdum vitae.</p>
            <div className="flex flex-col">
              {buttonData.map((button) => (
                <div key={button.id} className="mb-2">
                  <button
                    className={`bg-[#F4F4F4] hover:bg-gradient-to-r from-primary to-secondary text-[#505050] hover:text-white font-bold py-2 px-4 rounded w-3/4 ${
                      selectedButton === button.id ? 'bg-gradient-to-r from-primary h-16 to-secondary' : ''
                    }`}
                    onClick={() => handleButtonClick(button.id)}
                  >
                    {button.text}
                  </button>
                  {selectedButton === button.id && (
                    <p className="text-gray-600 mt-2 w-3/4">{button.additionalText}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    
};

export default About;
