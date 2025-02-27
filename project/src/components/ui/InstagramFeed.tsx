import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  // Mock Instagram feed data
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      likes: 124,
      comments: 8,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      likes: 89,
      comments: 5,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1588449668365-d15e397f6787?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      likes: 156,
      comments: 12,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1584473457493-17c4c24290c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      likes: 102,
      comments: 7,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1612016589987-0c7001d60f62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      likes: 78,
      comments: 3,
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1616740540792-3daec604777d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      likes: 134,
      comments: 9,
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 mb-3"
          >
            <Instagram className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Follow Us on Instagram</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600"
          >
            @vishal7.z
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="https://www.instagram.com/vishal7.z?igsh=Nml0aDA2NWRjb3Nz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-primary hover:underline"
          >
            View Profile
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/vishal7.z?igsh=Nml0aDA2NWRjb3Nz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.likes}
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;