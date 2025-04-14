
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
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">WANT TO KNOW HOW WE MEASURE SUCCESS?</h1>
      <p className="text-xl md:text-2xl text-center">Tap to explore our Impact</p>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: '#F2F5FA',
          opacity: 0.1,
        }}
      />
    </div>
  );
};

export default SplashPage;
