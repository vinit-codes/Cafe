'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiStar } from 'react-icons/fi';
import menuData from '@/data/menu.json';

const dietaryIcons = {
  'Vegetarian': '🥬',
  'VG': '🌱',
  'VG Available': '🌱*',
  'GF': '🌾',
  'GF Available': '🌾*'
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState('breakfast');
  const categories = Object.keys(menuData.categories);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
          alt="BrewHaven Menu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white text-center mb-4">
              Our Menu
            </h1>
            <p className="font-body text-xl text-white/90 text-center max-w-2xl">
              Crafted with love, served with passion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-card rounded-2xl p-2 shadow-lg">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-xl font-body font-semibold transition-colors capitalize ${
                    activeTab === category
                      ? 'bg-gold text-dark-brown'
                      : 'text-dark-brown/60 dark:text-cream/60 hover:text-gold dark:hover:text-amber'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {menuData.categories[category as keyof typeof menuData.categories].title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {menuData.categories[activeTab as keyof typeof menuData.categories].items.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white dark:bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.bestseller && (
                    <div className="absolute top-4 left-4 bg-gold text-dark-brown px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <FiStar className="mr-1" size={14} />
                      Bestseller
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-dark-brown dark:text-cream mb-2">
                    {item.name}
                  </h3>
                  <p className="font-body text-dark-brown/70 dark:text-cream/70 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Dietary Tags */}
                  {item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="bg-secondary dark:bg-dark-brown/50 px-2 py-1 rounded-full text-xs font-semibold text-dark-brown dark:text-cream flex items-center"
                        >
                          <span className="mr-1">{dietaryIcons[diet as keyof typeof dietaryIcons]}</span>
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="font-heading text-2xl font-bold text-gold">
                      ${item.price.toFixed(2)}
                    </span>
                    <motion.button
                      className="bg-gold hover:bg-amber text-dark-brown font-semibold px-4 py-2 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Order
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Dietary Information */}
      <section className="py-16 bg-secondary/30 dark:bg-dark-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold text-dark-brown dark:text-cream mb-6">
              Dietary Information
            </h3>
            <div className="flex flex-wrap justify-center gap-6 font-body text-dark-brown/70 dark:text-cream/70">
              <span>🥬 Vegetarian</span>
              <span>🌱 Vegan</span>
              <span>🌾 Gluten-Free</span>
              <span>* Available upon request</span>
            </div>
            <p className="mt-4 text-sm text-dark-brown/60 dark:text-cream/60">
              Please inform our staff of any allergies or dietary requirements
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}