import { CONTACT } from "../constants/db";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="Contact" className="border-b border-neutral-900 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.25 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="text-center tracking-tighter">
        <p className="my-4">Based in {CONTACT.address}</p>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <a href="mailto:contact@nathanrydel.dev" className="my-4 underline">
            {CONTACT.email}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;