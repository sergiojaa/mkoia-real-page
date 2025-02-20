import mainPoto from '../assets/logistic5.jpg'
import secondImage from '../assets/logistic3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faBox, faUsers, faTruckFast, faClock, faDollarSign, faUser, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import thirdImage from '../assets/logistic2.jpg'
// import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div>
      <div className='relative'>
        <img src={mainPoto} alt="logistic image" className='w-full h-auto' />
        {/* <h2 className="absolute w-[240px] bottom-40 left-1/2 transform -translate-x-1/2  text-white  rounded-md text-center">
          ლოჯისტიკა წარმატებული ბიზნესისთვის
        </h2> */}
      </div>
      <div className='flex text-center gap-5 items-center justify-center flex-col '>
        <h2 className='font-bold text-xl mt-5'>რას გთავაზობთ</h2>
        <p className='w-[320px]  text-md'>ამანათების და ტვირთების ტრანსპორტირებისსაუკეთესო პირობები</p>

        <div className='flex xl:flex-row flex-col text-white  items-center  gap-2'>
          <div className="bg-[#1C3345] py-3 px-4 w-[300px] h-[150px] rounded-2xl flex flex-col justify-between items-center">
            <FontAwesomeIcon className="text-2xl text-white" icon={faUsers as IconProp} />
            <h3 className="text-white text-md">მომხმარებელთა კმაყოფილება</h3>
            <p className="text-white text-2xl">100%</p>
          </div>

          <div className="bg-[#1C3345] py-3 px-4 w-[300px] h-[150px] rounded-2xl flex flex-col justify-between items-center">
            <FontAwesomeIcon className="text-2xl text-white" icon={faClock as IconProp} />

            <h3 className='text-white text-md' >24/7</h3>
            <p className="text-white text-2xl">100%</p>
          </div>
          <div className="bg-[#1C3345] py-3 px-4 w-[300px] h-[150px] rounded-2xl flex flex-col justify-between items-center">
            <FontAwesomeIcon className="text-2xl text-white" icon={faTruckFast as IconProp} />

            <h3 className='text-white text-md'>ოპერაციის პროგრესი</h3>
            <p className="text-white text-2xl">100%</p>
          </div>
        </div>
        <div>
          <img src={secondImage} alt="" />
        </div>
        <div>
          <h2>ემკოია, სადაც თქვენი კმაყოფილება ჩვენი
            მთავარი პრიორიტეტია</h2>
        </div>
        <div className='flex flex-col  text-white  items-center  gap-2'>

          <div className="bg-[#1C3345] py-3 px-4 w-[300px] h-[200px] rounded-2xl flex flex-col justify-between items-center">
            <FontAwesomeIcon className="text-2xl mt-1 text-white" icon={faTruckFast as IconProp} />

            <h3 className='text-white text-xl'>საერთაშორისო მიწოდება</h3>
            <p className="text-white text-[15px]">
              კომპანია ამჟამად მუშაობს რეგიონალურ მასშტაბებზე
              თუმცა, დღითიდღე ვითარდება და განიხილავს
              საერთაშორისო მასშტაბებზე გასვლასაც.
            </p>
          </div>
          <div className="bg-[#1C3345] py-3 px-4 w-[300px] h-[200px] rounded-2xl flex flex-col justify-between items-center">
            <FontAwesomeIcon className="text-2xl mt-1 text-white" icon={faBox as IconProp} />

            <h3 className='text-white text-xl'>შეფუთვა</h3>
            <p className="text-white text-[15px]">ჩვენი სერვისი უზრუნველყოფს უსაფრთხო და ხარისხიან შეფუთვას, რათა თქვენი ტვირთი დაუზიანებლად მიაღწიოს დანიშნულების ადგილს</p>
          </div>
          <div className="bg-[#1C3345] py-3 px-4 w-[300px] h-[200px] rounded-2xl flex flex-col justify-between items-center">
            <FontAwesomeIcon className="text-2xl mt-1 text-white" icon={faClock as IconProp} />

            <h3 className='text-white text-xl'>დროზე მიწოდება</h3>
            <p className="text-white text-[12px]">ჩვენი ვალდებულებაა პროექტების დროული დასრულება. კომპანიის პრიორიტეტია იმავე დღეს მიწოდება – არანაირი გადავადება! ჩვენ დაუღალავად ვმუშაობთ თქვენი საჭიროებების დასაკმაყოფილებლად</p>
          </div>
        </div>
        <div>
          <h4>სარგებელი</h4>
          <h4>უპრობლემოდ გადაზიდვის გადაწყვეტილებები
            უწყვეტი მიწოდებისთვის</h4>

          <div className='flex ml-5 items-center justify-start' >
            <div className='flex gap-3 flex-col'>
              <div className='flex items-center gap-3'>
                <FontAwesomeIcon className='border border-black border-1 w-[20px]  rounded-full p-3' icon={faCar as IconProp} />
                <p>სანდო და დროული მიწოდება</p>
              </div>
              <div className='flex items-center gap-3'>
                <FontAwesomeIcon
                  className='border border-black border-1 w-[20px] p-3  rounded-full'
                  icon={faDollarSign as IconProp} />
                <p>ეფექტური გადაწყვეტილებები</p>
              </div>
              <div className='flex items-center gap-3'>
                <FontAwesomeIcon
                  className='border border-black border-1  w-[20px] p-3 rounded-full'
                  icon={faUser as IconProp} />
                <p>ეკო-მეგობრული ინიციატივები</p>
              </div>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon
                  className='border border-black border-1  w-[20px] p-3 rounded-full'
                  icon={faHeadset as IconProp} />
                <p>ერთგული მომხმარებელთა მხარდაჭერა</p>
              </div>
            </div>

            {/* <img className='w-[150px]' src={thirdImage} alt="" /> */}
          </div>

        </div>

      </div>

    </div>
  )
}
