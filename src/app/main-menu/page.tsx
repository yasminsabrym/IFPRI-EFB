'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';
import {motion} from 'framer-motion'; // Import framer-motion

const MainMenu = () => {
  const router = useRouter();

  const buttonVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
    whileHover: {
      scale: 1.05,
      transition: {duration: 0.2},
    },
    whileTap: {scale: 0.95},
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 text-white"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 1}}}
      exit={{opacity: 0, transition: {duration: 0.5}}}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-semibold mb-4 text-center"
        style={{color: '#FF6301'}}
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1, transition: {duration: 0.8, delay: 0.3}}}
      >
        GIVING HOPE THROUGH DATA
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-8 text-center"
        style={{color: '#F2F5FA'}}
        initial={{opacity: 0}}
        animate={{opacity: 0.8, transition: {duration: 0.8, delay: 0.5}}}
      >
        Select a project to learn how we track and achieve impact.
      </motion.p>
      <div className="flex flex-col space-y-6 w-full max-w-md">
        <motion.div variants={buttonVariants} initial="hidden" animate="visible">
          <Button
            size="lg"
            className="w-full"
            style={{backgroundColor: '#70C16E', color: 'white'}}
            onClick={() => router.push('/nsb-overview')}
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            NUTRITION-SENSITIVE BOX (NSB)
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} initial="hidden" animate="visible">
          <Button
            size="lg"
            className="w-full"
            style={{backgroundColor: '#70C16E', color: 'white'}}
            onClick={() => router.push('/stunting-reduction')}
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            STUNTING REDUCTION
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainMenu;
