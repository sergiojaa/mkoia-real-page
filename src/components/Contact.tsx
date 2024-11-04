import React, { useState, useEffect } from 'react';
import image1 from '../assets/logistic-1.jpg';
import image2 from '../assets/logistic2.jpg';
import image3 from '../assets/logistic3.jpg';
import image4 from '../assets/logistic4.jpg';
import image5 from '../assets/logistic5.jpg';

export default function Contact() {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative w-full mx-auto overflow-hidden bg-gray-200 h-[775px]"> {/* Added height for visibility */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" /> {/* Use h-full to cover container */}
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-center p-4 bg-black bg-opacity-50">
        <h1 className="text-[40px] font-bold text-white ml-[150px] mb-[10px] ">ლოჯისტიკა</h1>
        <h1 className="text-[40px] font-bold text-white ml-[150px]">  წარმატებული ბიზნესისთვის!</h1>
       
      </div>
    </div>
  );
}
