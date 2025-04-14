
'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';

const NSBOverview = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white p-8">
      <h1 className="text-3xl font-semibold mb-4">Nutrition-Sensitive Box: Protecting Food Security</h1>
      <div className="bg-gray-100 bg-opacity-20 rounded-lg p-4 mb-6 w-full max-w-3xl">
        <p className="text-lg text-center">
          Facing high inflation, our Nutrition-Sensitive Box (NSB) was designed to go beyond staples by including
          protein- and iron-rich foods. This approach helps families maintain dietary quality and overall food
          security, even as prices soar.
        </p>
      </div>

      <div className="w-full max-w-xl">
        {/* Placeholder for Spider Chart */}
        <div className="h-80 bg-gray-200 rounded-lg mb-4">
          <p className="text-center text-black">Interactive Spider Chart will go here</p>
        </div>
        <div className="text-sm text-gray-400 text-center">
          • Baseline (Grey line) • Control Group Mid-Term (Red line) • NSB Mid-Term (Green line)
          <br />
          Tap any metric on the chart to learn more.
        </div>
      </div>

      <Button className="mt-8" onClick={() => router.push('/main-menu')}>
        BACK TO MAIN MENU
      </Button>
    </div>
  );
};

export default NSBOverview;
