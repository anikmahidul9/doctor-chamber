/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import apoinment from '../assets/apoinment.jpg'

const ContactForm = () => { 
  const [fullName, setFullName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
    console.log('Full Name:', fullName);
    console.log('Date:', date);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Subject:', subject);
    // Reset form fields
    setFullName('');
    setDate('');
    setEmail('');
    setPhone('');
    setSubject('');
  };

  return (
    <div className="flex justify-center mt-10">
        
        <div className="w-1/2 flex flex-col justify-center items-center">
          <img src={apoinment} alt="Picture" className=" h-1/2 w-3/4 object-cover" />
        </div>
        <div className="max-w-lg w-full bg-white rounded-lg p-6 flex">
    <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className='font-bold text-4xl text-center mb-4 mt-0'>Booking Now</h1>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject:</label>
        <textarea
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
        ></textarea>
      </div>
      <button type='submit' className="bg-[#D4FDFE] text-black py-2 px-4 rounded-md hover:bg-white border-4 border-transparent hover:border-[#D4FDFE]">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default ContactForm;
