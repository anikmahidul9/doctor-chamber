import React from 'react';
import icon3 from '../assets/icons/clock.svg'
import icon2 from '../assets/icons/phone.svg'
import icon1 from '../assets/icons/marker.svg'

const Card = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      heading: 'EMERGENCY SERVICE',
      paragraph: 'Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio mattis in. Quisque dapibus aliquet dictum. Integer dapibus ullamcorper est, ac',
      button: 'See More',
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
    },
    {
      id: 2,
      icon: icon2,
      heading: 'DO YOU WANT TO MAKE AN APPOINTMENT',
      paragraph: 'Saturday-Monday. Friday to Saturday',
      button: 'Book Now',
      bgClass: 'bg-accent',
    },
    {
      id: 3,
      icon: icon3,
      heading: 'OPENING HOURS',
      paragraph: 'Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio mattis in. Quisque dapibus aliquet dictum.',
      button: 'Contact Us',
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-0 rounded">
      {data.map((card) => (
        <div
          key={card.id}
          className={`relative max-w-sm rounded overflow-hidden shadow-lg m-2 ${card.bgClass}`}
        >
          <div className="px-6 py-4">
            <div className="flex items-start">
              <img
                className="mb-4"
                src={card.icon}
                alt="Icon"
              />
            </div>
            <div className="text-white font-bold text-1 mb-2 font-mono">{card.heading}</div>
            <p className="text-white text-base font-mono mb-6">{card.paragraph}</p>
          </div>
          <div className=" px-6 py-4 ">
            <button className="bg-white hover:bg-transparent text-gray font-bold py-2 px-4 rounded-full border-2 border-transparent hover:border-white hover:text-white absolute bottom-4">
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
