
'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';

const StuntingReduction = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 md:p-8 text-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Stunting Reduction: Building a Healthy Generation
      </h1>
      <div className="bg-gray-100 bg-opacity-20 rounded-lg p-3 md:p-4 mb-6 w-full max-w-2xl">
        <p className="text-base md:text-lg text-center">
          Stunting is when a child’s growth (height-for-age) is too low due to chronic malnutrition or poor health.
          Our program focuses on the first 1,000 days, providing nutritional support, medical checkups, and
          counseling to reduce stunting and secure a better future.
        </p>
      </div>

      <div className="w-full max-w-md md:max-w-xl">
        {/* Placeholder for Timeline */}
        <div className="h-64 md:h-80 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
          <p className="text-center text-black">Interactive Timeline will go here</p>
        </div>
      </div>

      <Button
        className="mt-6 md:mt-8 transform transition-transform active:scale-95"
        onClick={() => router.push('/main-menu')}
      >
        BACK TO MAIN MENU
      </Button>
    </div>
  );
};

export default StuntingReduction;
