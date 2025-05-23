
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import ContactInformation from '@/components/contact/ContactInformation';
import ContactForm from '@/components/contact/ContactForm';
import LocationMap from '@/components/contact/LocationMap';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - Avenues Global School</title>
        <meta name="description" content="Get in touch with Avenues Global School. Contact us for admissions, inquiries, or to schedule a visit." />
        <meta name="keywords" content="contact school, school admissions, school location, school inquiry, visit campus" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Avenues Global School" />
        <meta property="og:description" content="Reach out to us for admissions and general inquiries." />
        <meta property="og:image" content="https://smartavenues.edu/contact-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Contact Avenues Global School" />
        <meta name="twitter:description" content="Reach out to us for admissions and general inquiries." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Avenues Global School",
              "description": "Get in touch with Avenues Global School for admissions and general inquiries.",
              "mainEntity": {
                "@type": "EducationalOrganization",
                "name": "Avenues Global School",
                "telephone": "+91 7997043399",
                "email": "avenuesglobalschool@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Education Street",
                  "addressLocality": "Knowledge City",
                  "postalCode": "12345",
                  "addressCountry": "US"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-school-blue to-school-blue-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-school-orange mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </div>
        </div>
      </section>
      
      {/* Connect with us banner */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <p className="text-gray-600 mb-4 md:mb-0">Get in touch with us through any of these channels:</p>
            <div className="flex space-x-6">
              <a href="#" className="flex items-center text-school-blue hover:text-school-blue-dark transition-colors">
                <Mail className="h-5 w-5 mr-2" /> avenuesglobalschool@gmail.com
              </a>
              <a href="#" className="flex items-center text-school-blue hover:text-school-blue-dark transition-colors">
                <Phone className="h-5 w-5 mr-2" /> +91 7997043399
              </a>
              <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-school-blue hover:text-school-orange transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-school-blue hover:text-school-orange transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-school-blue hover:text-school-orange transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="py-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Get in touch with us for any inquiries or to schedule a visit to our campus.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <ContactInformation />
            </motion.div>
            
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <ContactForm />
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-display font-semibold text-center mb-8">Find Us</h2>
            <LocationMap />
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Contact;
