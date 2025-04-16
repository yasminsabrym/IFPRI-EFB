'use client';

import React, {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '../../components/ui/button';
import {motion} from 'framer-motion'; // Import framer-motion
import {Logo} from '@/components/logo';

const MainMenu = () => {
  const router = useRouter();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Redirect to the splash screen after 15 seconds of inactivity
        router.push('/');
      }, 15000); // 15 seconds
    };

    // Initial call to set the timer
    resetTimer();

    // Set up event listeners for user activity
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
  }, [router]); // Add router as a dependency

  useEffect(() => {
    // Prefetch the NSB overview page to improve loading speed
    router.prefetch('/nsb-overview');
    router.prefetch('/stunting-reduction');
  }, [router]);

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
      <Logo/>
      <motion.h1
        className="text-6xl md:text-7xl font-semibold mb-4 text-center handjet text-accent"
        style={{fontFamily: 'Handjet, cursive', color: '#FF6301'}}
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
            onClick={() => router.push('/nsb-overview')} // Keep router.push for button click
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
            onClick={() => router.push('/stunting-reduction')} // Keep router.push for button click
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
