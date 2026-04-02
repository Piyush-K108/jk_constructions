import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section className="py-12 px-6 lg:px-16">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex items-center justify-center">
          <div className="w-12 h-[2px] bg-yellow-500 mr-3"></div>
          <h2 className="text-yellow-500 text-lg font-semibold uppercase tracking-wide">
            ABOUT US
          </h2>
          <div className="w-12 h-[2px] bg-yellow-500 ml-3"></div>
        </div>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mt-3"
        >
          Building Dreams with Strength and Precision
        </motion.h3>
      </motion.div>

      {/* Content */}
      <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Images Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            <img
              src="/src/assets/heroimg.png"
              alt="Construction team"
              className="w-60 lg:w-72 rounded-lg shadow-lg transform rotate-6"
            />
            {/* <img
              src="/src/assets/heroimg.png"
              alt="Planning"
              className="w-60 lg:w-72 rounded-lg shadow-lg absolute -bottom-8 -right-10 transform -rotate-6"
            /> */}
          </div>

          {/* Stats */}
          <motion.div
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full p-4 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-500 font-bold text-lg">10K+</p>
            <p className="text-gray-600 text-sm">Customers Satisfied</p>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:w-1/2"
        >
          <p className="text-gray-600">
            Today's construction industry emphasizes sustainability by using
            eco-friendly materials and incorporating energy-efficient systems,
            ensuring environmentally conscious and future-ready designs.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              "We Provide 24/7 Service",
              "Qualified Agents",
              "Great Technology",
              "35 Years Experience",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 text-lg font-semibold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.2 },
                }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="text-yellow-500 text-xl" />
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold uppercase rounded-lg hover:bg-yellow-600 transition duration-300 shadow-md"
          >
            More About Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
