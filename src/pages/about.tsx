  import React, { JSX } from 'react';

const About = (): JSX.Element => {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">About Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            We are a clothing store dedicated to providing the best fashion for everyone.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Our mission is to offer stylish and affordable clothing that makes you feel confident and comfortable.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Thank you for choosing our store!
          </p>
        </div>
      </div>
    );
  }

export default About;