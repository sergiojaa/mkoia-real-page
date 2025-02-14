
import image4 from '../assets/logistic4.jpg';

export default function About() {
  return (
    <div>


      <div
        className="lg:flex-row items-center  flex flex-col  justify-center  md:mt-[180px] mx-auto    bg-cover bg-center"
      >

        <div className="lg:ml-[20px]   md:ml-[20px] lg:mt-[250px] ">
          <h1 className="text-blue-500  xl:pb-[30px] font-bold xl:pt-[50px] lg:mt-[-250px] xl:ml-[100px]    mt-[170px] font-lato text-[25px] ml-[20px] md:text-[30px] lg:text-[40px]">ჩვენს შესახებ</h1>

          <p className="   text-gray-500 ml-[20px] lg:w-[500px] xl:ml-[100px] lg:text-[20px] md:w-[700px] font-lato md:text-[30px] md: mt-[10px]">
            <span className='font-bold text-blue-500'>ლოჯისტიკური კომპანია ემკოია</span> -  ფლობს საწყობს თბილისში, საიდანაც ახდენს ყველაფრის მიწოდებას უმოკლეს ვადაში.
          </p>
          <h2 className="text-blue-500 xl:ml-[100px] font-lato ml-[20px] lg:text-[24px] mt-[15px] font-bold md:text-[40px] md:mt-[20px]">ემკოიას აქვს ორი მთავარი ნიშა:</h2>
          <div >
            <ul className=" xl:ml-[80px]  font-lato md:text-[30px] text-gray-500 text-[20px] mt-[10px]">
              <li className='mb-[10px] xl:text-[30px] lg:text-[23px]  ml-[20px]'>დროული მიწოდება</li>
              <li className='ml-[20px] xl:text-[30px] lg:text-[23px]  '>მომხმარებელზე გათვლილი  მომსახურება</li>
            </ul>

          </div>
        </div>
        <div className="flex px-5 py-12 justify-center items-center w-full">
          <img className="xl:w-[550px]  w-[400px] xl:ml-[80px] xl:mt-[50px]" src={image4} alt="Logistics" />
        </div>

      </div>
      <div className="xl:mt-[20px] lg:ml-[70px] mt-10 ">
        <p className="text-gray-500 lg:w-[300px] lg:ml-10 lg:mt-5  xl:text-[20px] xl:ml-[50px] xl:w-[600px]  mb-[20px] md:ml-[40px] lg:text-[20px] mt-[20px] lg:mt-[-10px] ml-[20px] font-lato md:text-[20px] md:w-[600px] md:mt-[50px]">
          <span className="text-blue-500 font-bold lg:text-[24px] text-[25px] font-lato md:text-[39px]">
            ლოჯისტიკური კომპანია ემკოია
          </span>
          სპეციალიზირებული სამშენებლო მასალების ლოჯისტიკაში. ჩვენი მთავარი ვალდებულებაა, რომ თქვენი პროექტები დასრულდეს დროულად . კომპანიის ნიშაა პროდუქტის მიწოდება იმავე დღეს, არანაირი გადავადება. კომპანიისთვის უპირველესია დრო, შესაბამისად დაუღალავად ვშრომობთ თქვენი საჭიროებების დასაკმაყოფილებლად. ასევე კომპანიას აქვს საშუალება ჩამოგიტანოთ ნებისმიერი სამშენებლო მასალა ჩინეთიდან და თურქეთიდან. ვმუშაობთ როგორც მსხვილ კონტრაქტორებზე ასევე კერძო პირებზე. შესაკვეთად დაგვიკავშირდით მითითებულ მონაცემებზე. <br />
          <span className='font-bold text-blue-500 lg:text-[24px]'>შპს „ემკოია“ </span> - თანამშრომლობს ისეთ კომპანიებთან როგორებიც არიან: „დელტა მშენებელი“, „KTW DEVELOPEMNT“, “Coca-Cola Bottled Georgia”, „Rebuild“, „Geo Group“, „Construction Group“. ვპარტნიორობთ თურქულ და ჩინურ კომპანიებთან.  </p>
      </div>



    </div>
  );
}
