export default function Contact() {

  return (
    <div>
      <div className='md:mt-[250px] md:ml-[130px] mt-[200px] ml-[20px]  font-lato xl:ml-[250px] lg:flex' >
        <div className='md:mt-[50px]' >
          <h1 className='text-blue-500 font-bold font-lato text-[40px]'>საკონტაქტო ინფორმაცია</h1>
          <h2 className='text-gray-500 text-[25px]  xl:mt-[20px] mt-[10px]'>მეილი: infoinfo@mkoia.ge</h2>
          <h2 className='text-gray-500 text-[25px] xl:mt-[20px] mt-[10px]'> ტელეფონის ნომერი: +995 574013708</h2>
          <h2 className='text-gray-500 text-[25px] xl:mt-[20px] mt-[10px]'>ტელეფონის ნომერი: +995 577409883</h2>
          <h2 className='text-gray-500 text-[25px] xl:mt-[20px] mt-[10px]'>მისამართი: რ.აგლაძის 57</h2>
        </div>
        <div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1863.571775719697!2d44.77749339848847!3d41.73598060809336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472ea41f84189%3A0x18305d06032b930!2sLTD%20SIBEL!5e0!3m2!1ska!2sge!4v1730883184638!5m2!1ska!2sge" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe className='md:w-[500px] xl:ml-[230px] lg:mr-[20px]  mt-[20px] mb-[30px] w-[380px] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1863.571775719697!2d44.77749339848847!3d41.73598060809336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472ea41f84189%3A0x18305d06032b930!2sLTD%20SIBEL!5e0!3m2!1ska!2sge!4v1730883184638!5m2!1ska!2sge" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </div>

  );
}
