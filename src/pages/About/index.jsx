import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaUsers, FaHardHat } from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { icon: <FaHardHat />, value: "500+", label: "Projects Completed" },
    { icon: <FaUsers />, value: "10K+", label: "Happy Clients" },
    { icon: <FaAward />, value: "35+", label: "Years Experience" },
    { icon: <FaCheckCircle />, value: "100%", label: "Quality Assured" },
  ];

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
            About <span className="text-yellow-500">JK Construction</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Building Excellence Since 1989 - Your Trusted Construction Partner
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-yellow-500 text-5xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-[2px] bg-yellow-500 mr-3"></div>
                <h2 className="text-yellow-500 text-lg font-semibold uppercase">
                  Our Story
                </h2>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Building Dreams with Strength and Precision
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 1989, JK Construction has been at the forefront of
                delivering exceptional construction services across residential,
                commercial, and industrial sectors. With over three decades of
                experience, we've built a reputation for quality, reliability, and
                innovation.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a simple vision: to transform architectural
                dreams into reality while maintaining the highest standards of
                craftsmanship. Today, we've completed over 500 projects and served
                more than 10,000 satisfied clients.
              </p>
              <p className="text-gray-600">
                We embrace sustainability by using eco-friendly materials and
                incorporating energy-efficient systems, ensuring environmentally
                conscious and future-ready designs.
              </p>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                alt="Construction site"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-lg shadow-xl text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To deliver exceptional construction services that exceed client
                expectations through innovation, quality craftsmanship, and
                sustainable practices. We are committed to building lasting
                relationships and structures that stand the test of time.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be recognized as India's most trusted and innovative
                construction company, setting industry standards for quality,
                safety, and sustainability while transforming skylines and
                communities across the nation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-[2px] bg-yellow-500 mr-3"></div>
              <h2 className="text-yellow-500 text-lg font-semibold uppercase">
                Why Choose Us
              </h2>
              <div className="w-12 h-[2px] bg-yellow-500 ml-3"></div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              What Makes Us Different
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Service",
                description:
                  "Round-the-clock support and emergency services for all your construction needs.",
              },
              {
                title: "Qualified Experts",
                description:
                  "Certified professionals with extensive experience in diverse construction projects.",
              },
              {
                title: "Advanced Technology",
                description:
                  "State-of-the-art equipment and modern construction techniques for superior results.",
              },
              {
                title: "Quality Materials",
                description:
                  "We use only premium, tested materials to ensure durability and longevity.",
              },
              {
                title: "Safety First",
                description:
                  "Strict adherence to safety protocols to protect our workers and your property.",
              },
              {
                title: "On-Time Delivery",
                description:
                  "Committed to completing projects within the agreed timeline without compromising quality.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <FaCheckCircle className="text-yellow-500 text-4xl mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life. Contact us today for a free
            consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Get Free Consultation
            </a>
            <a
              href="/projects"
              className="bg-white text-black font-bold px-8 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
