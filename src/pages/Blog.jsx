import React from 'react';
import photo from '../assets/doctor.png';

const Blog = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center ml-6 mx-auto">
      <div className="md:w-1/2 mx-auto w-full ml-10">
        <h1 className="text-3xl font-bold mb-2 text-left">Serena William</h1>
        <h2 className="text-xl text-gray-600 mb-4">Nurolegist</h2>
        <p className="text-gray-600 mb-4 w-3/4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec ligula sit amet est lacinia elementum. Nullam malesuada sapien
          massa, id luctus ligula scelerisque eu. Vestibulum cursus metus non
          enim gravida, vel scelerisque nunc consequat. Vestibulum convallis ex
          in sapien scelerisque lobortis. Mauris lacinia nulla eget purus
          convallis, et tempus nisl consequat.
        </p>
        <button className="bg-gradient-to-r from-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          All Doctor
        </button>
      </div>
      <div className="md:w-1/2">
        <img className="w-full" src={photo} alt="Photo" />
      </div>
    </div>
  );
};

export default Blog;
