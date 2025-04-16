'use client';

import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/egyptian-food-bank-logo.png"
      alt="Egyptian Food Bank Logo"
      width={150}
      height={50}
      style={{
        marginBottom: '20px',
      }}
    />
  );
};
