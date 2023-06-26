/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import img1 from '../assets/banner.png'
import Card from './Card';
import Service from './Service';
import About from './About';
import Blog from './Blog';
import Question from './Question';
import SpecialOffer from './SpecialOffer';
import ContactForm from './ContactForm';
const Home = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row">
      
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
      <div className='mx-auto'>
        <h1 className="text-8xl font-bold mb-4">Professional<br/> Health Care</h1>
        <h1 className="text-gray-700 leading-relaxed text-2xl">
        Your health and  satisfaction are
          <br />
          our top priorities
        </h1>
      </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={img1}
          className="w-full h-auto"
          alt="Image"
        />
      </div>
    </div>
    <Card></Card>
    <Service></Service>
    <About></About>
    <Blog></Blog>
    <Question></Question>
    <SpecialOffer></SpecialOffer>
    <ContactForm></ContactForm>
    </>
  );
};

export default Home;
