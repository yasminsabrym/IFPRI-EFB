'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    subject: 'HDDS',
    Baseline: 4.5,
    Control: 3.86,
    NSB: 5.37,
    fullMark: 6,
  },
  {
    subject: 'FIES',
    Baseline: 2.5,
    Control: 3.21,
    NSB: 1.3,
    fullMark: 5,
  },
  {
    subject: 'Energy Intake',
    Baseline: 1675,
    Control: 1521,
    NSB: 2027,
    fullMark: 3000,
  },
  {
    subject: 'Protein Intake',
    Baseline: 45,
    Control: 31.1,
    NSB: 55.7,
    fullMark: 100,
  },
  {
    subject: 'Iron Intake',
    Baseline: 8,
    Control: 6.18,
    NSB: 9.87,
    fullMark: 20,
  },
];

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
        {/* Interactive Spider Chart */}
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="#fff" />
          <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} stroke="#fff" />
          <Radar
            name="Baseline"
            dataKey="Baseline"
            stroke="#999999"
            fill="#999999"
            fillOpacity={0.6}
          />
          <Radar
            name="Control"
            dataKey="Control"
            stroke="#EE6363"
            fill="#EE6363"
            fillOpacity={0.6}
          />
          <Radar name="NSB" dataKey="NSB" stroke="#44BBA4" fill="#44BBA4" fillOpacity={0.6} />
          <Tooltip />
          <Legend
            wrapperStyle={{
              paddingTop: '20px',
              color: '#777',
            }}
          />
        </RadarChart>
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
