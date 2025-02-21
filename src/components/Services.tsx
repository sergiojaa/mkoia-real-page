import { motion } from "framer-motion";
import image from "../assets/logistic2.jpg";

// Define animations
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

export default function Services() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerList}
      className="container max-w-[1100px] mx-auto px-4 py-12"
    >
      <motion.div
        variants={staggerList}
        className="flex flex-col md:flex-row gap-8 items-start"
      >
        {/* Image */}
        <motion.div variants={fadeInUp} className="w-full md:w-1/2">
          <img
            src={image}
            alt="Logistics services"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div variants={fadeInUp} className="w-full md:w-1/2">
          <h4 className="text-xl font-semibold mb-4">
            ჩვენ გთავაზობთ სამშენებლო მასალების ლოჯისტიკას უმოკლეს დროში. მაგალითად:
          </h4>

          {/* Animated List */}
          <motion.ul variants={staggerList} className="list-disc pl-5">
            {[
              "პლასტმასის მილები შესაბამისი ფიტინგებით",
              "პოლიეთილენის მილები შესაბამისი ფიტინგებით",
              "ცემენტი, წებოცემენტი",
              "საღებავი",
              "ლამინირებული პარკეტი",
              "არმსტრონგის შეკიდული ჭერი",
              "სააბაზანო აქსესუარები",
              "ელექტროობა",
              "ინტერნეტის კაბელი",
              "ხარაჩოები",
              "ხელოვნური ბალახი",
            ].map((item, index) => (
              <motion.li key={index} variants={fadeInItem} className="mb-1">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}