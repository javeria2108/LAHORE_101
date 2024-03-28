import React from 'react';
import Button from './Button';
function Hero() {
  return (
    <div className="hero relative h-screen overflow-hidden">
      <div className="hero-image relative w-full h-full overflow-hidden">
        <img
          src="/lahore101-bg.jpg" // Replace with your image path
          alt="Lahore Cityscape"
          className="w-full h-full object-cover object-center opacity-100"
        />
        <div className="absolute inset-y-0 left-0 w-4/6 bg-gradient-to-r from-black opacity-80"></div>
      </div>
      <div className="absolute inset-0 flex-column m-auto px-10 py-20 text-white z-10 items-start justify-start">
        <h1 className="text-7xl font-bold leading-tight">Lahore 101</h1>
        <p className="text-4xl mt-4">Your perfect tour guide for visiting Lahore</p>
        <p className="text-3xl mt-4">Explore the city of gardens</p>
        <div className="mt-10">
          <Button type="button" title="Get Started" variant="btn_dark_green" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
