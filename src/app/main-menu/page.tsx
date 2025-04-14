
'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';

const MainMenu = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl font-semibold mb-4">GIVING HOPE THROUGH DATA</h1>
      <p className="text-lg mb-8">Select a project to learn how we track and achieve impact.</p>
      <div className="flex flex-col space-y-4">
        <Button size="lg" className="w-80" onClick={() => router.push('/nsb-overview')}>
          NUTRITION-SENSITIVE BOX (NSB)
        </Button>
        <Button size="lg" className="w-80" onClick={() => router.push('/stunting-reduction')}>
          STUNTING REDUCTION
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
