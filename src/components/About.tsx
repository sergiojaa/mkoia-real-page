import aboutImage from '../assets/homemkoia.jpg';
import image4 from '../assets/logistic4.jpg';
import image5 from '../assets/logistic5.jpg';

export default function About() {
  return (
    <div>
      

      {/* Section with image3 as the background */}
      <div
        className="flex mt-[180px]  items-center bg-cover bg-center"
        // style={{ backgroundImage: `url(${image5})`, height: '775px' }}
      >
        
        <div className="ml-[150px] mt-[30px] ">
          <h1 className="text-blue-500 font-bold font-lato text-[40px]">ვინ ვართ ჩვენ</h1>
          <p className="w-[600px] text-gray-500 font-lato text-[30px] mt-[10px]">
            ემკოია არის მზარდი ლოჯისტიკური კომპანია, რომელიც ფლობს საწყობს თბილისში, საიდანაც ახდენს ყველაფრის მიწოდებას უმოკლეს ვადაში.
          </p>
          <h2 className="text-blue-500 font-lato font-bold text-[40px] mt-[20px]">ემკოიას აქვს ორი მთავარი ნიშა:</h2>
          <div >
            <ul className="w-[600px] font-lato  text-gray-500 text-[20px] mt-[10px]">  
              <li className='mb-[10px]'>ლოჯისტიკური სერვისი</li>
              <li>მომხმარებელზე გათვლილი მომსახურება</li>
            </ul>
            {/* <p className="mb-[20px]">ლოჯისტიკური სერვისი</p>
            <p>მომხმარებელზე გათვლილი მომსახურება</p> */}
          </div>
        </div>
        <div>
          <p className="text-black-500 text-gray-500  font-lato ml-[150px] text-[20px] w-[600px] mt-[50px]">
          <span className='text-blue-500 font-bold font-lato text-[39px]'> ლოჯისტიკური კომპანია ემკოია</span>   სპეციალიზირებული სამშენებლო მასალების ლოჯისტიკაში. ჩვენი მთავარი ვალდებულებაა, რომ თქვენი პროექტები დასრულდეს დროულად შესაბამისად, კომპანიის ნიშაა პროდუქტის მიწოდება იმავე დღეს, არანაირი გადავადება. კომპანიისთვის უპირველესია დრო, შესაბამისად დაუღალავად ვშრომობთ თქვენი საჭიროებების დასაკმაყოფილებლად. ასევე კომპანიას აქვს საშუალება ჩამოგიტანოთ ნებისმიერი სამშენებლო მასალა ჩინეთიდან და თურქეთიდან. ვმუშაობთ როგორც მსხვილ კონტრაქტორებზე ასევე კერძო პირებზე. შესაკვეთად დაგვიკავშირდით „აქ გადადიოდეს პირდაპირ კონტაქტის მონაკვეთზე“. Contractors შპს „ემკოიას“ კონტრაქტორები არიან: „დელტა მშენებელი“, „KTW DEVELOPEMNT“, “Coca-Cola Bottled Georgia”, „Rebuild“, „Geo Group“, „Construction Group“. ვპარტნიორობთ თურქულ და ჩინურ კომპანიებთან.
          </p>
        </div>
      </div>
     

    </div>
  );
}
