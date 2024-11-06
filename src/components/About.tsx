import aboutImage from '../assets/homemkoia.jpg';
import image4 from '../assets/logistic4.jpg';
import image5 from '../assets/logistic5.jpg';

export default function About() {
  return (
    <div>
      

      {/* Section with image3 as the background */}
      <div
        className="lg:flex md:mt-[180px]   items-center bg-cover bg-center"
        // style={{ backgroundImage: `url(${image5})`, height: '775px' }}
      >
        
        <div className="lg:ml-[100px]   md:ml-[20px] lg:mt-[10px] ">
          <h1 className="text-blue-500 font-bold lg:mt-[-90px]   mt-[170px] font-lato text-[25px] ml-[20px] md:text-[30px] lg:text-[40px]">ვინ ვართ ჩვენ</h1>
          <p className="   text-gray-500 ml-[20px] lg:w-[500px] lg:text-[20px] md:w-[700px] font-lato md:text-[30px] md: mt-[10px]">
            ემკოია არის მზარდი ლოჯისტიკური კომპანია, რომელიც ფლობს საწყობს თბილისში, საიდანაც ახდენს ყველაფრის მიწოდებას უმოკლეს ვადაში.
          </p>
          <h2 className="text-blue-500 font-lato ml-[20px] lg:text-[24px] mt-[15px] font-bold md:text-[40px] md:mt-[20px]">ემკოიას აქვს ორი მთავარი ნიშა:</h2>
          <div >
            <ul className="w-[600px] font-lato md:text-[30px] text-gray-500 text-[20px] mt-[10px]">  
              <li className='mb-[10px] ml-[20px]'>ლოჯისტიკური სერვისი</li>
              <li className='ml-[20px]  '>მომხმარებელზე გათვლილი  მომსახურება</li>
            </ul>
            {/* <p className="mb-[20px]">ლოჯისტიკური სერვისი</p>
            <p>მომხმარებელზე გათვლილი მომსახურება</p> */}
          </div>
        </div>
        <div>
          <p className="text-black-500 text-gray-500 lg:ml-[200px] mb-[20px] md:ml-[40px] lg:text-[20px] font-bold  mt-[20px] lg:mt-[-10px] ml-[20px] font-lato  md:text-[20px] md:w-[600px] md:mt-[50px]">
          <span className='text-blue-500 font-bold lg:text-[24px]  text-[25px] font-lato md:text-[39px]'> ლოჯისტიკური კომპანია ემკოია</span> -   სპეციალიზირებული სამშენებლო მასალების ლოჯისტიკაში. ჩვენი მთავარი ვალდებულებაა, რომ თქვენი პროექტები დასრულდეს დროულად შესაბამისად, კომპანიის ნიშაა პროდუქტის მიწოდება იმავე დღეს, არანაირი გადავადება. კომპანიისთვის უპირველესია დრო, შესაბამისად დაუღალავად ვშრომობთ თქვენი საჭიროებების დასაკმაყოფილებლად. ასევე კომპანიას აქვს საშუალება ჩამოგიტანოთ ნებისმიერი სამშენებლო მასალა ჩინეთიდან და თურქეთიდან. ვმუშაობთ როგორც მსხვილ კონტრაქტორებზე ასევე კერძო პირებზე. შესაკვეთად დაგვიკავშირდით COntact. Contractors შპს „ემკოიას“ კონტრაქტორები არიან: „დელტა მშენებელი“, „KTW DEVELOPEMNT“, “Coca-Cola Bottled Georgia”, „Rebuild“, „Geo Group“, „Construction Group“. ვპარტნიორობთ თურქულ და ჩინურ კომპანიებთან.
          </p>
        </div>
      </div>
     

    </div>
  );
}
