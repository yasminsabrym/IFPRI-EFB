
'use client';

import React, {useEffect} from 'react';
import {useRouter} from 'next/navigation';

const SplashPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/main-menu'); // Navigate to the main menu after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-semibold mb-4">WANT TO KNOW HOW WE MEASURE SUCCESS?</h1>
      <p className="text-2xl">Tap to explore our Impact</p>
    </div>
  );
};

export default SplashPage;
