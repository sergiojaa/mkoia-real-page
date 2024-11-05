import { useState, useEffect } from 'react';
import Header from './Header'; // Ensure the correct path to your Header component
import image1 from '../assets/logistic-1.jpg';
import image2 from '../assets/logistic2.jpg';
import image3 from '../assets/logistic3.jpg';
import image4 from '../assets/logistic4.jpg';
import image5 from '../assets/logistic5.jpg';
import image7 from '../assets/mkoia7.jpg';


export default function Home() {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div>
      {/* Pass activeLink and setActiveLink to the Header */}
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />

      <div className="relative w-full mx-auto overflow-hidden h-[680px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover opacity-0" />
          </div>
        ))}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-center p-4 bg-black bg-opacity-50">
          <h1 className="text-[40px] ml-[10px]  font-bold text-white md:ml-[140px] md:mb-[10px]">ლოჯისტიკა</h1>
          <h1 className="text-[40px]  font-bold text-white md:w-[50px] md:ml-[140px]"> წარმატებული ბიზნესისთვის!</h1>
        </div>
      </div>

      <div className="md:flex lg:flex-row md:flex-col  items-center    font-poppins">
        <div className="md:flex  md:flex-col md:w-[50%] ">
          <p className="text-gray-500 lg:ml-[40px] pl-[10px]  text-[23px]  font-poppins w-full  md:mt-[50px]">
            <span className="font-bold  font-lato text-[40px]  text-gray-500">ემკოია</span> არის ლოჯისტიკური კომპანია საქართველოში, რომელიც ფლობს სამრეწველო ქონებასა და მოძრავ აქტივებს.
            ჩვენ გთავაზობთ მიწოდების ჯაჭვის ყოვლისმომცველ გადაწყვეტილებებს, შენახვის სერვისებს და მრავალფეროვან ობიექტებს,
            რომლებიც მორგებულია საქართველოში წარმატებული ფუნქციონირებისთვის.
          </p>
          <div className="mt-[30px] lg:ml-[40px]">
            <h2 className="text-gray-500 pl-[10px] font-lato font-bold text-[30px]">ემკოიას აქვს ორი მთავარი ნიშა:</h2>
            <div className="mt-[10px] ml-[30px]">
              <ol className="list-decimal font-lato">
                <li className="text-gray-500 text-[25px]">ლოჯისტიკური სერვისი</li>
                <li className="text-gray-500 text-[25px]">მომხმარებელზე გათვლილი მომსახურება</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="md:mt-[80px] md:mr-[30px] md:ml-[30px]">
          <img src={image7} className="w-[600px]  md:w-[700px] p-[10px]" alt="Logistics" />
        </div>
      </div>
    </div>
  );
}
