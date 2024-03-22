import React from 'react';
import Button from './Button';
function Hero() {
  return (
    <div className="hero relative h-screen overflow-hidden">
      <img
        src='/shahi-qila.jpg'// Replace with your image path
        alt="Lahore Cityscape"
        className="w-full h-full object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 flex-column m-auto px-10 py-20 text-black z-10">
        <h1 className="text-7xl font-bold leading-tight">Lahore 101</h1>
        <p className="text-3xl mt-4">Your perfect tour guide for Lahore</p>
       <div className='mt-10'>
        <Button 
            type="button"
            title="Get Started" 
            variant="btn_dark_green"/>
            </div>
      </div>
    </div>
  );
}

export default Hero;
