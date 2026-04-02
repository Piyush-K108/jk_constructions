import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    { id: 1, title: "BUILDING AND DEVELOPMENT", description: "We manage construction projects from start to finish, ensuring quality, compliance with regulations, and efficiency in execution." },
    { id: 2, title: "ARCHITECTURAL DESIGN & CONSTRUCTION", description: "Our team creates innovative and functional designs tailored to client needs while maintaining aesthetic excellence." },
    { id: 3, title: "INTERIOR STYLING SERVICES", description: "From modern minimalism to classic elegance, we transform interiors into stunning and comfortable spaces." },
    { id: 4, title: "HOME RESTORATION", description: "Reviving homes with precision, we restore historic charm while integrating modern enhancements." },
  ];

  const toggleService = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <motion.section
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-yellow-500 font-semibold uppercase text-sm">OUR SERVICES</h3>
          <h2 className="text-3xl font-bold">
            EXCELLENCE IN SERVICES, <br /> DESIGNED FOR YOU <span className="text-yellow-500">!</span>
          </h2>
        </motion.div>
        <motion.button
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition mt-4 md:mt-0"
          whileHover={{ scale: 1.05 }}
        >
          VIEW ALL SERVICES
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src="" alt="Construction Worker" className="w-full rounded-lg shadow-lg" />
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="border rounded-lg shadow-lg overflow-hidden">
            {services.map((service, index) => (
              <div key={service.id} className="border-b last:border-none">
                <motion.div
                  onClick={() => toggleService(index)}
                  className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`${openIndex === index ? "text-yellow-500" : "text-gray-400"} font-bold text-lg`}>
                      0{service.id}
                    </span>
                    <h4 className={`font-semibold text-lg transition ${openIndex === index ? "text-yellow-500" : "text-black"}`}>
                      {service.title}
                    </h4>
                  </div>
                  <span className="text-gray-400 text-lg">{openIndex === index ? "▲" : "▼"}</span>
                </motion.div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      className="text-gray-600 text-sm px-6 pb-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
