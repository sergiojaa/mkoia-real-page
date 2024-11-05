import aboutImage from '../assets/homemkoia.jpg'
import image2 from '../assets/logistic2.jpg';

export default function Services() {
  return (
    <div>
      <div className='flex' >
        <div className='ml-[150px] mt-[250px] ' >
          <p className='text-blue-500 font-bold font-lato text-[30px]'>
          ჩვენ გთავაზობთ სამშენებლო მასალების ლოჯისტიკას <br />  უმოკლეს დროში. მაგალითად:
        
          </p>
            <ul className='list-disc font-lato ml-[20px] text-gray-500 text-[20px] mt-[10px]'>
              <li>პლასტმასის მილები შესაბამისი ფიტინგებით</li>
              <li>პოლიეთილენის მილები შესაბამისი ფიტინგებით</li>
              <li>ცემენტი, წებოცემენტი </li>
              <li>საღებავი</li>
              <li>ლამინირებული პარკეტი</li>
              <li>არმსტრონგის შეკიდული ჭერი</li>
              <li>სააბაზანო აქსესუარები</li>
              <li>ელექტროობა</li>
              <li>ინტერნეტის კაბელი</li>
              <li>ხარაჩოები</li>
              <li>ხელოვნური ბალახი</li>
              <li>თაბაშირ-მუყაოს ფილა</li>
            </ul>
        </div>
        <div>
      <img className='w-[500px] h-[450px] ml-[100px] mt-[250px] ' src={image2} alt="photo about logistic" />

      </div>
      </div>
     
    </div>
  )
}
