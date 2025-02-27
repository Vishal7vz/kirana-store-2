import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import { ShoppingBag, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-xl text-gray-900 mb-6">About Mukesh Kirana Store</h1>
            <p className="text-xl text-gray-700">
              Your trusted neighborhood store for all daily essentials since 2008.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Mukesh Kirana Store"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionHeading
                title="Our Story"
                subtitle="How we started and where we are today"
              />
              <div className="space-y-4 text-gray-700">
                <p>
                  Mukesh Kirana Store was founded in 2008 by Mr. Mukesh Sharma with a simple vision: to provide quality groceries and household items to the local community at affordable prices.
                </p>
                <p>
                  What started as a small shop with basic essentials has now grown into a comprehensive store offering a wide range of products including household items, skincare products, dairy products, home essentials, and authentic Indian masalas.
                </p>
                <p>
                  Over the years, we have built strong relationships with our customers and suppliers, ensuring that we always provide the best quality products at competitive prices.
                </p>
                <p>
                  Today, Mukesh Kirana Store is a trusted name in Lucknow, known for its exceptional customer service, quality products, and community involvement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide everything we do"
              centered
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingBag className="w-10 h-10 text-primary" />,
                title: 'Quality Products',
                description:
                  'We carefully select our products to ensure they meet the highest standards of quality. We work directly with trusted suppliers to bring you the best.',
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: 'Customer First',
                description:
                  'Our customers are at the heart of everything we do. We strive to provide exceptional service and a pleasant shopping experience for everyone.',
              },
              {
                icon: <Award className="w-10 h-10 text-primary" />,
                title: 'Community Commitment',
                description:
                  'We are proud to be part of the local community and actively participate in community events and initiatives to give back.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <SectionHeading
              title="Why Choose Us"
              subtitle="What sets Mukesh Kirana Store apart from others"
              centered
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Wide Product Range',
                description:
                  'From daily essentials to specialty items, we offer a comprehensive selection of products to meet all your needs under one roof.',
              },
              {
                title: 'Competitive Pricing',
                description:
                  'We believe in fair pricing and work hard to offer quality products at competitive prices that provide value for money.',
              },
              {
                title: 'Personalized Service',
                description:
                  'Our knowledgeable staff is always ready to assist you, provide recommendations, and help you find exactly what you need.',
              },
              {
                title: 'Convenient Location',
                description:
                  'Located in the heart of Lucknow, our store is easily accessible and offers a convenient shopping experience for the local community.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="mr-4 flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Hours */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6"
            >
              <Clock className="w-8 h-8" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg mb-6"
            >
              Store Hours
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2 mb-8"
            >
              <p className="text-xl">Monday - Saturday: 8:00 AM - 9:00 PM</p>
              <p className="text-xl">Sunday: 9:00 AM - 8:00 PM</p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/80"
            >
              We are open all days of the week for your convenience. Visit us anytime!
            </motion.p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;