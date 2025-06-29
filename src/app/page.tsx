"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const page = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } }
  };

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for maximum performance'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Designed with aesthetics in mind'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise-grade security'
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-noise opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              variants={item}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Build <span className="text-yellow-300">Amazing</span> Digital Experiences
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-xl md:text-2xl text-blue-100 mb-8"
            >
              We create beautiful, functional websites and applications that drive results.
            </motion.p>
            
            <motion.div variants={item} className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeIn}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
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
              Why Choose Us
            </motion.h2>
            <motion.p variants={item} className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional design to deliver outstanding results.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <motion.div 
              variants={item}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/team1.jpeg" 
                  alt="Product Showcase" 
                  width={600} 
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-xl shadow-xl z-10 hidden lg:block"></div>
            </motion.div>

            <motion.div variants={item} className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Work Speaks for Itself</h2>
              <p className="text-gray-600 mb-6">
                We've helped dozens of clients transform their digital presence with our custom solutions. 
                Our approach combines strategic thinking with flawless execution.
              </p>
              <ul className="space-y-3 mb-8">
                {['Custom Development', 'Responsive Design', 'SEO Optimization', 'Ongoing Support'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={item} className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "This team transformed our online presence completely. Our traffic has tripled!",
                author: "Sarah Johnson",
                role: "Marketing Director"
              },
              {
                quote: "The most professional web development team we've ever worked with. Highly recommend!",
                author: "Michael Chen",
                role: "CEO, TechStart"
              },
              {
                quote: "Exceptional attention to detail and delivered ahead of schedule. Will work with them again.",
                author: "Emily Rodriguez",
                role: "Founder, Creative Co."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="text-yellow-400 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                    <Image 
                      src={`/team2.jpeg`} 
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals. Get in touch today for a free consultation.
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

export default page;