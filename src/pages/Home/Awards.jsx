import React from "react";
import { motion } from "framer-motion";
import { FaToolbox, FaAward, FaHardHat } from "react-icons/fa";

const awardsData = [
  {
    icon: <FaToolbox className="text-yellow-500 text-5xl" />,
    title: "35+ YEARS EXPERIENCE",
    description:
      "Compliance with building codes, and work to achieve the desired aesthetic and functional goals.",
  },
  {
    icon: <FaAward className="text-yellow-500 text-5xl" />,
    title: "AWARD WINNING COMPANY",
    description:
      "Compliance with building codes, and work to achieve the desired aesthetic and functional goals.",
  },
  {
    icon: <FaHardHat className="text-yellow-500 text-5xl" />,
    title: "EXPERIENCED WORKERS",
    description:
      "Compliance with building codes, and work to achieve the desired aesthetic and functional goals.",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Awards = () => {
  return (
    <section className="py-12 px-6 text-center">
      {/* Section Title with Yellow Lines */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <div className="w-12 h-[2px] bg-yellow-500 mr-3"></div>
        <h2 className="text-yellow-500 text-lg font-semibold uppercase tracking-wide">
          Our Features
        </h2>
        <div className="w-12 h-[2px] bg-yellow-500 ml-3"></div>
      </motion.div>

      <motion.h3
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 mt-2"
      >
        Pushing Boundaries, Building Futures
      </motion.h3>

      {/* Awards Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            {award.icon}
            <h4 className="text-lg font-bold text-gray-900 mt-4">
              {award.title}
            </h4>
            <p className="text-gray-600 mt-2">{award.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
