'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';
import reviews from '@/data/reviews.json';

const heroImages = [
  {
    src: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Cozy cafe interior with warm lighting"
  },
  {
    src: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Perfect latte art"
  },
  {
    src: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Fresh artisanal pastries"
  },
  {
    src: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Gourmet avocado toast"
  },
  {
    src: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Delicious cafe lunch"
  }
];

const offers = [
  {
    title: "Weekend Brunch Special",
    description: "25% off all brunch combos",
    badge: "Limited Time"
  },
  {
    title: "Morning Delight",
    description: "Free pastry with any coffee purchase",
    badge: "Daily 7-11am"
  }
];

const vlogs = [
  {
    id: "dQw4w9WgXcQ",
    title: "The Perfect Morning Routine at BrewHaven",
    thumbnail: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Behind the Scenes: Coffee Bean to Cup",
    thumbnail: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Cafe Culture: A Day in the Life",
    thumbnail: "https://images.pexels.com/photos/1797124/pexels-photo-1797124.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
  }
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % heroImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.reviews.length) % reviews.reviews.length);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={heroImages[currentImage].src}
              alt={heroImages[currentImage].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <motion.div
            className="max-w-4xl px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to
              <span className="block text-gold steam-animation">BrewHaven</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Where every cup tells a story and every moment creates memories. 
              Experience premium coffee culture since 2012.
            </p>
            <motion.button
              className="bg-gold hover:bg-amber text-dark-brown font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Menu
            </motion.button>
          </motion.div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gold transition-colors"
        >
          <FiChevronLeft size={40} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gold transition-colors"
        >
          <FiChevronRight size={40} />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImage ? 'bg-gold' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-gradient mb-16">
            Current Offers
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 gradient-border p-[2px] rounded-2xl">
                  <div className="bg-cream dark:bg-dark-brown h-full rounded-2xl" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-gold text-dark-brown px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {offer.badge}
                  </span>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-dark-brown dark:text-cream">
                    {offer.title}
                  </h3>
                  <p className="font-body text-lg text-dark-brown/80 dark:text-cream/80">
                    {offer.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-secondary/50 dark:bg-dark-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-gradient mb-16">
              What Our Customers Say
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <Image
                      src={reviews.reviews[currentReview].image}
                      alt={reviews.reviews[currentReview].name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-dark-brown dark:text-cream">
                        {reviews.reviews[currentReview].name}
                      </h4>
                      <div className="flex items-center">
                        {[...Array(reviews.reviews[currentReview].rating)].map((_, i) => (
                          <FiStar key={i} className="text-gold fill-current" size={18} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-lg text-dark-brown/80 dark:text-cream/80 leading-relaxed">
                    "{reviews.reviews[currentReview].comment}"
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Review navigation */}
              <button
                onClick={prevReview}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold hover:text-amber transition-colors"
              >
                <FiChevronLeft size={32} />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gold hover:text-amber transition-colors"
              >
                <FiChevronRight size={32} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vlog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-gradient mb-16">
            Cafe Culture Vlogs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vlogs.map((vlog, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <motion.div
                      className="bg-gold/90 rounded-full p-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FiPlay className="text-dark-brown" size={24} />
                    </motion.div>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-dark-brown dark:text-cream group-hover:text-gold dark:group-hover:text-amber transition-colors">
                  {vlog.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}