
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Image from 'next/image';

// Place logo.png in the public directory
import logo from '/logo.png';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
