import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: "Indore, Madhya Pradesh, India",
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: "+91 6265667476",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: "info@jkconstruction.com",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
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
            Get In <span className="text-yellow-500">Touch</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Have a project in mind? Let's discuss how we can bring your vision to
            life
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-yellow-500 text-5xl mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-[2px] bg-yellow-500 mr-3"></div>
                  <h2 className="text-yellow-500 text-lg font-semibold uppercase">
                    Send Message
                  </h2>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Drop Us a Line
                </h3>
              </div>

              {submitted && (
                <motion.div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Map */}
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74844494107!2d75.69815839453126!3d22.724201199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-lg shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="mb-6">
                  Our team is available 24/7 for emergency construction services
                  and urgent consultations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-2xl" />
                    <div>
                      <p className="font-semibold">Emergency Hotline</p>
                      <p>+91 6265667476</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-2xl" />
                    <div>
                      <p className="font-semibold">Quick Response Email</p>
                      <p>urgent@jkconstruction.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's turn your construction dreams into reality. Contact us today for
            a free consultation and quote.
          </p>
          <motion.a
            href="tel:+916265667476"
            className="inline-block bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Now: +91 6265667476
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
