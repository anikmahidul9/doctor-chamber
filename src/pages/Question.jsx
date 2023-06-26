/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import photo from '../assets/ozkan-guner-aFqSRokmw2E-unsplash.jpg';

const Question = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const buttonData = [
    {
      id: 1,
      text: 'How to make an Appointment?',
      additionalText: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, urna non pellentesque sollicitudin, felis lorem porta nibh, suscipit lacinia ante augue venenatis nibh. Nullam tristique ornare lorem at',
    },
    {
      id: 2,
      text: 'How to take care of yourself?',
      additionalText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, urna non pellentesque sollicitudin, felis lorem porta nibh, suscipit lacinia ante augue venenatis nibh. Nullam tristique ornare lorem at',
    },
    {
      id: 3,
      text: 'When doctor will present?',
      additionalText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, urna non pellentesque sollicitudin, felis lorem porta nibh, suscipit lacinia ante augue venenatis nibh. Nullam tristique ornare lorem at',
    },
    {
        id: 4,
        text: 'How much money needs to be charged?',
        additionalText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, urna non pellentesque sollicitudin, felis lorem porta nibh, suscipit lacinia ante augue venenatis nibh. Nullam tristique ornare lorem at',
      },
  ];

  return (
        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
             <div className="md:w-1/2 flex flex-col justify-center mx-auto ml-10">
             <h1 className="text-3xl font-bold mb-4 w-1/3">Frequently Asked<span className='text-primary' >Question</span></h1>
             <button className="bg-gradient-to-r from-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/3">
          View All
        </button>
          </div>
          <div className="md:w-1/2 ml-6">
            <div className="flex flex-col justify-start">
              {buttonData.map((button) => (
                <div key={button.id} className="mb-2">
                  <h1
                    className={` text-[#505050] hover:text-primary py-2 px-4 rounded w-3/4 cursor-pointer ${
                      selectedButton === button.id ? 'font-bold' : ''
                    }`}
                    onClick={() => handleButtonClick(button.id)}
                  >
                    {button.text}
                  </h1>
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

export default Question;
