'use client';

import Image from 'next/image';

export const Logo = () => (
  <Image
    src="/images/efb-logo.png"
    alt="Egyptian Food Bank Logo"
    width={150}
    height={50}
    style={{ marginBottom: '20px' }}
  />
);
