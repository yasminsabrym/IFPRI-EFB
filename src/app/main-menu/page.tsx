
'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';

const MainMenu = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">GIVING HOPE THROUGH DATA</h1>
      <p className="text-lg md:text-xl mb-8 text-center">Select a project to learn how we track and achieve impact.</p>
      <div className="flex flex-col space-y-6 w-full max-w-md">
        <Button
          size="lg"
          className="w-full transform transition-transform active:scale-95"
          onClick={() => router.push('/nsb-overview')}
        >
          NUTRITION-SENSITIVE BOX (NSB)
        </Button>
        <Button
          size="lg"
          className="w-full transform transition-transform active:scale-95"
          onClick={() => router.push('/stunting-reduction')}
        >
          STUNTING REDUCTION
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
