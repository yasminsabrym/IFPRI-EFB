'use client';

import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="https://drive.google.com/uc?export=view&id=1BY3mYNYBw07F5rYgNCUUlFztzvMzARu0"
      alt="Egyptian Food Bank Logo"
      width={150}
      height={50}
      style={{
        marginBottom: '20px',
      }}
    />
  );
};
