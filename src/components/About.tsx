import { motion } from 'framer-motion';
import image4 from '../assets/logistic3.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerList = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between list items
    },
  },
};

const fadeInItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function About() {
  return (
    <div className="container max-w-[1100px] mx-auto px-4 py-12">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerList}
        className="flex mt-16 flex-col lg:flex-row justify-between max-w-[1000px] w-full mx-auto gap-8"
      >
        <motion.div variants={fadeInUp} className="w-full flex mt-4 flex-col gap-5 lg:w-[48%]">
          <h1 className="font-bold text-3xl text-primary mb-4">ჩვენს შესახებ</h1>
          <h3 className="text-lg leading-relaxed">
            <span className="font-bold text-secondary">ლოჯისტიკური კომპანია ემკოია - </span>
            ფლობს საწყობს თბილისში, საიდანაც ახდენს ყველაფრის მიწოდებას უმოკლეს ვადაში.
          </h3>
          <h4 className="font-bold text-xl mt-4 mb-2">ემკოიას აქვს ორი მთავარი ნიშა:</h4>
          <motion.ul variants={staggerList} className="list-disc pl-6 space-y-2">
            <motion.li variants={fadeInItem} className="text-lg">დროული მიწოდება</motion.li>
            <motion.li variants={fadeInItem} className="text-lg">მომხმარებელზე გათვლილი მომსახურება</motion.li>
          </motion.ul>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full lg:w-[48%] flex justify-end">
          <img className="hidden lg:block rounded-lg shadow-lg max-w-full" src={image4 || "/placeholder.svg"} alt="Logistics" />
        </motion.div>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerList}
        className="flex flex-col lg:flex-row justify-between max-w-[1000px] w-full mx-auto gap-8 mt-16"
      >
        <motion.div variants={fadeInUp} className="w-full lg:w-[48%] flex justify-start">
          <img className="hidden lg:block rounded-lg shadow-lg max-w-full" src={image4 || "/placeholder.svg"} alt="Logistics" />
        </motion.div>
        <motion.div variants={fadeInUp} className="w-full lg:w-[48%]">
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-secondary">ლოჯისტიკური კომპანია ემკოია - </span>
            სპეციალიზირებული სამშენებლო მასალების ლოჯისტიკაში. ჩვენი მთავარი ვალდებულებაა, რომ თქვენი პროექტები დასრულდეს დროულად.
            კომპანიის ნიშაა პროდუქტის მიწოდება იმავე დღეს, არანაირი გადავადება. კომპანიისთვის უპირველესია დრო, შესაბამისად დაუღალავად ვშრომობთ
            თქვენი საჭიროებების დასაკმაყოფილებლად. ასევე კომპანიას აქვს საშუალება ჩამოგიტანოთ ნებისმიერი სამშენებლო მასალა ჩინეთიდან და თურქეთიდან.
            ვმუშაობთ როგორც მსხვილ კონტრაქტორებზე, ასევე კერძო პირებზე. შესაკვეთად დაგვიკავშირდით მითითებულ მონაცემებზე.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerList}
        className="flex flex-col lg:items-center lg:flex-row justify-between max-w-[1000px] w-full mx-auto gap-8 mt-16"
      >
        <motion.div variants={fadeInUp} className="w-full lg:w-[48%]">
          <h3 className='text-lg leading-relaxed'>
            <span className="font-bold text-secondary">შპს „ემკოია" - </span>
            თანამშრომლობს ისეთ კომპანიებთან, როგორებიც არიან: „დელტა მშენებელი", „KTW DEVELOPMENT", "Coca-Cola Bottlers Georgia",
            „Rebuild", „Geo Group", „Construction Group". ვპარტნიორობთ თურქულ და ჩინურ კომპანიებთან.
          </h3>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full lg:w-[48%] flex justify-end">
          <img className="rounded-lg shadow-lg max-w-full" src={image4 || "/placeholder.svg"} alt="Logistics" />
        </motion.div>
      </motion.div>
    </div>
  );
}
