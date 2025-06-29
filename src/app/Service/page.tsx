"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Service Type
type Service = {
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
};

// Animation Variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites built with modern technologies for optimal performance.",
    icon: "💻",
    features: [
      "React/Next.js",
      "Responsive Design",
      "SEO Optimized",
      "CMS Integration",
    ],
    image: "/team1.jpeg",
  },
  {
    title: "Mobile Apps",
    description:
      "Beautiful, functional mobile applications for iOS and Android.",
    icon: "📱",
    features: [
      "React Native",
      "Native Development",
      "Cross-platform",
      "App Store Ready",
    ],
    image: "/team2.jpeg",
  },
  {
    title: "UI/UX Design",
    description: "User-centered designs that drive engagement and conversions.",
    icon: "🎨",
    features: ["Figma/Sketch", "User Research", "Prototyping", "Design Systems"],
    image: "/team3.jpeg",
  },
  {
    title: "E-Commerce",
    description: "Complete online store solutions to grow your business.",
    icon: "🛒",
    features: [
      "Shopify/WordPress",
      "Payment Gateways",
      "Inventory Management",
      "Marketing Tools",
    ],
    image: "/team4.jpeg",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to increase your online presence.",
    icon: "📈",
    features: ["SEO", "Social Media", "PPC Campaigns", "Content Strategy"],
    image: "/team1.jpeg",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable infrastructure for your growing business needs.",
    icon: "☁️",
    features: ["AWS/Azure", "Serverless", "DevOps", "Database Management"],
    image: "/team3.jpeg",
  },
];

const Page  = () => {
  return (
    <motion.div initial="hidden" animate="show" variants={container} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="max-w-4xl mx-auto text-center">
            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Our <span className="text-yellow-300">Services</span>
            </motion.h1>

            <motion.p variants={item} className="text-xl md:text-2xl text-blue-100 mb-8">
              Comprehensive solutions tailored to your business needs
            </motion.p>

            <motion.div variants={item}>
              <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                Get a Free Quote
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-3xl font-bold text-gray-900 mb-4">
              What We Offer
            </motion.h2>
            <motion.p variants={item} className="text-gray-600 max-w-2xl mx-auto">
              Professional services to take your business to the next level
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 text-4xl bg-white/90 rounded-lg w-14 h-14 flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </motion.h2>
            <motion.p variants={item} className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure your project's success
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-0">
              {[
                { title: "Discovery", description: "We start by understanding your business goals and requirements", icon: "🔍" },
                { title: "Planning", description: "Creating a detailed roadmap for your project", icon: "📝" },
                { title: "Design", description: "Crafting beautiful, user-friendly interfaces", icon: "🎨" },
                { title: "Development", description: "Building robust, scalable solutions", icon: "💻" },
                { title: "Testing", description: "Ensuring quality and performance", icon: "🧪" },
                { title: "Launch", description: "Deploying and monitoring your solution", icon: "🚀" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative lg:flex lg:items-center lg:justify-between lg:odd:flex-row-reverse"
                >
                  <div className="lg:w-5/12 mb-6 lg:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-xl shadow-md inline-block"
                    >
                      <div className="text-3xl mb-3">{step.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  </div>
                  <div className="lg:w-1/12 flex justify-center">
                    <div className="lg:hidden w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200">
                      <span className="text-xl">{index + 1}</span>
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 z-10">
                      <span className="text-xl">{index + 1}</span>
                    </div>
                  </div>
                  <div className="lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our professional services.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Call Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Page;
