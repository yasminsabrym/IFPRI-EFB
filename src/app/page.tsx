'use client';

import React, {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {motion} from 'framer-motion';

const SplashPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/main-menu'); // Navigate to the main menu after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, [router]);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.5},
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-white p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-semibold mb-4 text-center"
        style={{color: '#FF6301'}}
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1, transition: {duration: 0.8, delay: 0.3}}}
      >
        WANT TO KNOW HOW WE MEASURE SUCCESS?
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-center"
        style={{color: '#F2F5FA'}}
        initial={{opacity: 0}}
        animate={{opacity: 0.8, transition: {duration: 0.8, delay: 0.5}}}
      >
        Tap to explore our Impact
      </motion.p>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: '#F2F5FA',
          opacity: 0.1,
        }}
        initial={{scale: 0}}
        animate={{scale: 1, transition: {type: 'spring', stiffness: 100, damping: 20}}}
      />
    </motion.div>
  );
};

export default SplashPage;
