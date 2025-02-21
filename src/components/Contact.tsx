
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeInItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function Contact() {
  return (
    <div className="container max-w-[1100px] mx-auto px-4 py-12">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Contact Information Section */}
        <motion.div variants={fadeInUp} className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">დაგვიკავშირდით</h2>
            <p className="text-muted-foreground mb-8">
              გთხოვთ დაგვიკავშირდეთ ნებისმიერ დროს. ჩვენ მზად ვართ დაგეხმაროთ.
            </p>
          </div>

          <motion.div variants={staggerContainer} className="space-y-6">
            {/* Contact Items */}
            <motion.div variants={fadeInItem} className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">ტელეფონი</p>
                <a href="tel:+995599999999" className="text-muted-foreground hover:text-primary">
                  +995 599 99 99 99
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInItem} className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">ელ-ფოსტა</p>
                <a href="mailto:info@example.com" className="text-muted-foreground hover:text-primary">
                  info@example.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInItem} className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">მისამართი</p>
                <p className="text-muted-foreground">თბილისი, საქართველო</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInItem} className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">სამუშაო საათები</p>
                <p className="text-muted-foreground">ორშ - პარ: 09:00 - 18:00</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div variants={fadeInUp} className="h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95281.95501794391!2d44.71763464050164!3d41.73256025185193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e0!3m2!1sen!2sge!4v1708550556071!5m2!1sen!2sge"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </motion.div>


      </motion.div>
    </div>
  )
}

