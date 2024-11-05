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
    <div>
      <div className='mt-[250px]  font-lato ml-[250px] flex' >
        <div className='mt-[50px]' >
          <h1 className='text-blue-500 font-bold font-lato text-[40px]'>Contact info</h1>
          <h2 className='text-gray-500 text-[25px] mt-[10px]'>Mail: infoinfo@mkoia.ge</h2>
          <h2 className='text-gray-500 text-[25px] mt-[10px]'> Phone Number: +995 574013708</h2>
          <h2 className='text-gray-500 text-[25px] mt-[10px]'>Phone Number: +995 577409883</h2>
          <h2 className='text-gray-500 text-[25px] mt-[10px]'>Address: agladze-67</h2>
        </div>
        <div>
          <iframe className='w-[500px] ml-[200px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.4223892759487!2d44.806561411998594!3d41.68981647114321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf72d903d4f%3A0xdd66176bec24ee12!2z4YOb4YOU4YOY4YOT4YOc4YOY4YOhIOGDkeGDkOGDluGDkOGDoOGDmA!5e0!3m2!1ska!2sge!4v1728653218344!5m2!1ska!2sge" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
    </div>
 
  );
}
