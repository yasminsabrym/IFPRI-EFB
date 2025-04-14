'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import TimeLineChart from '@/components/ui/chart';

const timelineData = [
  { date: '2023-01-15', description: 'Program Launch: Kicked off the stunting reduction program.' },
  { date: '2023-03-22', description: 'First Medical Checkup: Conducted the first round of medical checkups.' },
  { date: '2023-05-10', description: 'Nutritional Support: Started providing nutritional support to families.' },
  { date: '2023-07-18', description: 'Counseling Session: Held the first counseling session for parents.' },
  { date: '2023-10-25', description: 'Mid-Program Review: Reviewed the program progress and made necessary adjustments.' },
  { date: '2024-01-30', description: 'Final Evaluation: Conducted the final program evaluation.' },
];

const StuntingReduction = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-start min-h-screen p-4 md:p-8 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-2xl md:text-3xl font-semibold mb-4 text-center"
        style={{ color: '#FF6301' }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
      >
        Stunting Reduction: Building a Healthy Generation
      </motion.h1>
      <motion.div
        className="bg-gray-100 bg-opacity-20 rounded-lg p-3 md:p-4 mb-6 w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, transition: { duration: 0.8, delay: 0.5 } }}
      >
        <p className="text-base md:text-lg text-center" style={{ color: '#F2F5FA' }}>
          Stunting is when a child’s growth (height-for-age) is too low due to chronic malnutrition or poor health.
          Our program focuses on the first 1,000 days, providing nutritional support, medical checkups, and
          counseling to reduce stunting and secure a better future.
        </p>
      </motion.div>

      <div className="w-full max-w-md md:max-w-xl">
        <TimeLineChart data={timelineData} />
      </div>

      <Button
        className="mt-6 md:mt-8 transform transition-transform active:scale-95"
        style={{ backgroundColor: '#003D6C', color: 'white' }}
        onClick={() => router.push('/main-menu')}
      >
        BACK TO MAIN MENU
      </Button>
    </motion.div>
  );
};

export default StuntingReduction;
