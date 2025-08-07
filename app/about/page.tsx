'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import team from '@/data/team.json';

const parallaxImages = [
  {
    src: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Wooden interior ambiance"
  },
  {
    src: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Perfect latte art"
  },
  {
    src: "https://images.pexels.com/photos/1797124/pexels-photo-1797124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Outdoor patio seating"
  },
  {
    src: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Cozy reading corner"
  },
  {
    src: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Fresh pastries display"
  },
  {
    src: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Coffee brewing process"
  }
];

export default function About() {
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1797124/pexels-photo-1797124.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
          alt="About BrewHaven Cafe"
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
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white text-center">
              Our Story
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Vintage coffee illustration"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl">
                <p className="font-heading text-2xl font-bold text-dark-brown">
                  Est. 2012
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-8">
              A Journey of Passion
            </h2>
            <div className="font-body text-lg text-dark-brown/80 dark:text-cream/80 space-y-6 leading-relaxed">
              <p>
                Founded in 2012 by coffee enthusiasts Maria and James, BrewHaven Cafe began as a 
                small dream to create a space where community meets exceptional coffee. What started 
                in a cozy corner shop has blossomed into the heart of our neighborhood.
              </p>
              <p>
                Our commitment to quality goes beyond just great coffee. We source our beans directly 
                from sustainable farms around the world, ensuring every cup supports both exceptional 
                flavor and ethical practices. Our pastries are made fresh daily using locally sourced 
                ingredients.
              </p>
              <p>
                Today, BrewHaven serves as more than just a cafe - it's a gathering place where 
                friendships are forged over lattes, business deals are sealed over espresso, and 
                memories are created one cup at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ambience Showcase - Parallax Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-gradient mb-16">
            Our Ambience
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {parallaxImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/50 dark:bg-dark-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-gradient mb-16">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.team.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredTeamMember(member.id)}
                  onHoverEnd={() => setHoveredTeamMember(null)}
                >
                  <div className="relative inline-block mb-6">
                    <motion.div
                      className="relative w-48 h-48 mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover shadow-lg"
                      />
                      {hoveredTeamMember === member.id && (
                        <motion.div
                          className="absolute inset-0 bg-gold/90 rounded-full flex items-center justify-center text-center p-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="font-body text-dark-brown text-sm leading-tight">
                            {member.bio}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-dark-brown dark:text-cream mb-2">
                    {member.name}
                  </h3>
                  <p className="font-body text-gold font-semibold">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-gradient mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We source the finest beans and ingredients, never compromising on quality for our customers."
              },
              {
                title: "Community Focus",
                description: "BrewHaven is more than a cafe - we're a gathering place that brings people together."
              },
              {
                title: "Sustainability",
                description: "We're committed to ethical sourcing and environmental responsibility in everything we do."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading text-2xl font-bold text-dark-brown dark:text-cream mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-dark-brown/80 dark:text-cream/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}