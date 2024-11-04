import homemkoia from '../assets/homemkoia.jpg';

export default function Home() {
  return (
    <div>
      {/* Wrap the h1 in a div to isolate its margin */}
      <div className='ml-[150px] mt-[30px]'>
        <div className="mt-[50px]">
          <h1 className="text-blue-500 font-poppins text-[30px]">ლოჯისტიკური კომპანია</h1>
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-col'>
          <div>
            <p className="text-gray-500 text-[20px] w-[600px] ml-[150px] mt-[40px]">
              მკოია არის ლოჯისტიკური კომპანია საქართველოში, რომელიც ფლობს სამრეწველო ქონებასა და მოძრავ აქტივებს.
              ჩვენ გთავაზობთ მიწოდების ჯაჭვის ყოვლისმომცველ გადაწყვეტილებებს, შენახვის სერვისებს და მრავალფეროვან ობიექტებს,
              რომლებიც მორგებულია საქართველოში წარმატებული ფუნქციონირებისთვის.
            </p>
          </div>
          <div className='ml-[150px]'>
            <div className='mt-[30px]'>
              <h2 className='text-blue-500 font-poppins text-[25px]'>ემკოიას აქვს ორი მთავარი ნიშა:</h2>
            </div>
            <div className='mt-[10px]'>
              <h3 className='text-gray-500 text-[20px]'>ლოჯისტიკური სერვისი</h3>
              <h3 className='text-gray-500 text-[20px] mt-[10px]'>მომხმარებელზე გათვლილი მომსახურება</h3>
            </div>
          </div>
        </div>
        <div>
          <img className='w-[500px] h-[400px] ml-[100px]' src={homemkoia} alt="photo about logistic" />
        </div>
      </div>
    </div>
  );
}
