'use client';

import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/your-logo.png" // Replace with the actual path to your logo
      alt="Company Logo"
      width={150} // Adjust the width as needed
      height={50} // Adjust the height as needed
      style={{
        marginBottom: '20px', // Add margin as needed
      }}
    />
  );
};
