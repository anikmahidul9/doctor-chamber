import React from 'react';
import icon1 from '../assets/cavity.png';
import icon2 from '../assets/fluoride.png';
import icon3 from '../assets/whitening.png';

const Service = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      heading: 'Pediatrics',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, orci sed egestas faucibus, leo sapien laoreet massa, feugiat.',
    },
    {
      id: 2,
      icon: icon2,
      heading: 'Ophthalmology',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, orci sed egestas faucibus, leo sapien laoreet massa, feugiat',
    },
    {
      id: 3,
      icon: icon3,
      heading: 'Dentistry',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, orci sed egestas faucibus, leo sapien laoreet massa, feugiat',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center ml-6 mt-10">
      {data.map((column) => (
        <div key={column.id} className="flex items-center my-4 ml-6  flex-wrap ">
          <img className="mr-2" src={column.icon} alt="Icon" />
          <div>
            <h3 className="text-lg font-bold mb-2">{column.heading}</h3>
            <p className="text-sm text-gray-600 w-80">{column.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
