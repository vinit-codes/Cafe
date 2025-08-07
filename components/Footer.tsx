'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-dark-brown dark:bg-black text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-3xl font-bold text-gold mb-4">
              BrewHaven Cafe
            </h3>
            <p className="font-body text-cream/80 mb-6">
              Serving premium coffee and artisanal treats since 2012. 
              Your cozy corner for exceptional experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/BrewHavenOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-amber transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://facebook.com/BrewHavenOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-amber transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiFacebook size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-xl font-semibold text-gold mb-4 flex items-center">
              <FiClock className="mr-2" />
              Operating Hours
            </h4>
            <div className="font-body text-cream/80 space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7am - 9pm</span>
              </div>
              <div className="flex justify-between">
                <span>Weekend</span>
                <span>8am - 10pm</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-xl font-semibold text-gold mb-4">
              Contact Info
            </h4>
            <div className="font-body text-cream/80 space-y-3">
              <div className="flex items-center">
                <FiPhone className="mr-3 text-gold" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FiMail className="mr-3 text-gold" />
                <span>contact@brewhaven.com</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-3 text-gold" />
                <span>123 Cafe Street, City</span>
              </div>
            </div>
          </motion.div>

          {/* Location Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-xl font-semibold text-gold mb-4">
              Find Us
            </h4>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5273484997673!2d-74.00597178459391!3d40.71278927933054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b7de005%3A0xb89d1fe6bc499443!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1639000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BrewHaven Cafe Location"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gold/30 mt-12 pt-8 text-center font-body text-cream/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; 2024 BrewHaven Cafe. All rights reserved. Crafted with ❤️ and ☕</p>
        </motion.div>
      </div>
    </footer>
  );
}