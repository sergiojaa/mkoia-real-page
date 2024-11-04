import aboutImage from '../assets/homemkoia.jpg'
export default function About() {
  return (
    <div>
      <div className='flex'>
      <div className='ml-[150px] mt-[30px]' >
      <div>
        <h1 className="text-blue-500 font-poppins text-[30px]">ვინ ვართ ჩვენ</h1>
      </div>
      <div>
        <p className='w-[600px] text-gray-500 text-[20px] mt-[10px]'>ემკოია არის მზარდი ლოჯისტიკური კომპანია რომელიც ფლობს საწყობს თბილისში , საიდანაც ახდენს ყველაფრის მიწოდებას უმოკლეს ვადაში</p>
      </div>
      <div>
        <h2 className="text-blue-500 font-poppins text-[30px] mt-[20px] ">ემკოიას აქვს ორი მთავარი ნიშა:</h2>
      </div>
      <div className='w-[600px] text-gray-500 text-[20px] mt-[10px]'>
        <p className='mb-[20px]'>ლოჯისტიკური სერვისი</p>
        <p>მომხმარებელზე გათვლილი მომსახურება
        </p>
      </div>
     

      </div>
      <div >
          <img className='w-[500px] h-[400px] ml-[100px] ' src={aboutImage} alt="photo about logistic" />
        </div>
    </div>
    <div className='flex'>
      <div>
      <div>
        <p className="text-blue-500 font-poppins ml-[150px] text-[20px] w-[600px] mt-[50px] ">ლოჯისტიკური კომპანია ემკოია , სპეციალიზირებული სამშენებლო მასალების ლოჯისტიკაში . ჩვენი მთავარი ვალდებულებაა ,
           რომ თქვენი პროექტები დასრულდეს დროულად შესაბამისად , კომპანიის ნიშაა პროდუქტის მიწოდება იმავე დღეს , არანაირი გადავადება .
            კომპანიისთვის უპირველესია დრო , შესაბამისად დაუღალავად ვშრომობთ თქვენი საჭიროებების დასაკმაყოფილებლად. . ასევე კომპანიას აქვს
             საშუალება ჩამოგიტანოთ ნებისმიერი სამშენებლო მასალა ჩინეთიდან და თურქეთიდან . ვმუშაობთ როგორც მსხვილ კონტრაქტორებზე ასევე კერძო
              პირებზე . შესაკვეთად დაგვიკავშირდით „აქ გადადიოდეს პირდაპირ კონტაქტის მონაკვეთზე“. Contractors 
          შპს „ემკოიას“ კონტრაქტორები არიან : „დელტა მშენებელი“ „KTW DEVELOPEMNT“ “Coca-Cola Bottled Georgia” „Rebuild“ „Geo Group“.
           „Construction Group“ .ვპარტნიორობთ თურქულ და ჩინურ კომპანიებთან. </p>
      </div>
      </div>
      <div>
      <img className='w-[500px] h-[450px] ml-[100px] mt-[50px] ' src={aboutImage} alt="photo about logistic" />
      </div>
    </div>
    </div>
    
  )
}
