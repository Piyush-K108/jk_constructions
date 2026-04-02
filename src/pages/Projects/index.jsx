import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendar, FaTag } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      category: "residential",
      location: "Indore, MP",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      description:
        "Modern 50-unit luxury apartment complex with state-of-the-art amenities",
    },
    {
      id: 2,
      title: "Corporate Office Tower",
      category: "commercial",
      location: "Indore, MP",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description:
        "15-story commercial building with eco-friendly design and modern facilities",
    },
    {
      id: 3,
      title: "Manufacturing Unit",
      category: "industrial",
      location: "Pithampur, MP",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      description:
        "50,000 sq ft industrial manufacturing facility with advanced infrastructure",
    },
    {
      id: 4,
      title: "Green Valley Villas",
      category: "residential",
      location: "Indore, MP",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      description:
        "Premium villa project with 25 independent houses and landscaped gardens",
    },
    {
      id: 5,
      title: "Shopping Mall Complex",
      category: "commercial",
      location: "Indore, MP",
      date: "2022",
      image:
        "https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&w=800&q=80",
      description:
        "3-level shopping complex with 100+ retail spaces and entertainment zone",
    },
    {
      id: 6,
      title: "Warehouse & Logistics Hub",
      category: "industrial",
      location: "Indore, MP",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      description:
        "Modern logistics facility with automated storage and distribution systems",
    },
    {
      id: 7,
      title: "Skyline Apartments",
      category: "residential",
      location: "Bhopal, MP",
      date: "2022",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      description:
        "High-rise residential project with panoramic city views and luxury amenities",
    },
    {
      id: 8,
      title: "Tech Park Campus",
      category: "commercial",
      location: "Indore, MP",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description:
        "IT campus with multiple buildings, cafeteria, and recreational facilities",
    },
    {
      id: 9,
      title: "Industrial Park Phase 1",
      category: "industrial",
      location: "Dewas, MP",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description:
        "Industrial park development with utilities and infrastructure for multiple units",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our <span className="text-yellow-500">Projects</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Showcasing Excellence in Construction - Over 500 Projects Completed
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Buttons */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === category.id
                    ? "bg-yellow-500 text-black shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="text-yellow-500 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCalendar className="text-yellow-500 mr-2" />
                      <span className="text-sm">{project.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaTag className="text-yellow-500 mr-2" />
                      <span className="text-sm capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    className="mt-4 w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-2xl text-gray-600">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "10K+", label: "Happy Clients" },
              { value: "35+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to See Your Project Here?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something extraordinary together. Contact
            us to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Start Your Project
            </a>
            <a
              href="/about"
              className="bg-white text-black font-bold px-8 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
