import React from 'react';

const cardData = [
  {
    id: 1,
    heading: 'Eye Checkup',
    subheading: '$ 108',
    paragraph:(<span> Allergy Test <br />
    Consultation <br />
    Treatments <br />
Service Provider <br />
Concern About
</span>),
bgClass: '#D4FDFE',
  },
  {
    id: 2,
    heading: 'Elergy Check ',
    subheading: '$ 105',
    paragraph:(<span> Allergy Test <br />
    Consultation <br />
    Treatments <br />
Service Provider <br />
Concern About
</span>),
bgClass: '#FFFFFF',
  },
  {
    id: 3,
    heading: 'Health Check',
    subheading: '$ 106',
    paragraph:(<span> Allergy Test <br />
    Consultation <br />
    Treatments <br />
Service Provider <br />
Concern About
</span>),
bgClass: '#D4FDFE',
  },
];

const SpecialOffer = () => {
  return (
    <div className="flex flex-warp justify-center mt-10">
      {cardData.map((card) => (
        <div key={card.id} className={` bg-[${card.bgClass}] p-4 rounded mx-4 text-center w-full`}>
          <h1 className="text-xl font-semibold mb-2">{card.heading}</h1>
          <h3 className="text-lg font-semibold mb-2">{card.subheading}</h3>
          <p className="text-gray-600 mb-4">{card.paragraph}</p>
          <p className="text-gray-600 mb-4">Full Course</p>
          <div className=" px-6 py-4 mb-4 flex justify-center items-center">
            <button className="bg-white hover:bg-transparent text-gray  font-bold py-2 px-4 rounded-full border-2 border-transparent hover:border-white hover:text-white absolute">See More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialOffer;
