
'use client';

import React, {useState} from 'react';
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
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from '@/components/ui/dialog';

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

const metricDetails = {
  HDDS: {
    title: 'HDDS (Household Dietary Diversity Score)',
    description: `The Household Dietary Diversity Score (HDDS) counts how many different food groups a household consumes. It ranges from 0 (no variety) to 12 (high variety). A higher HDDS means better diet quality and typically indicates greater economic access to food. When inflation rises, diet diversity often suffers.

    • Control changed by -0.64 points from baseline, while NSB increased by +0.87.
    • Net difference = +1.51 points, a 15.6% improvement for NSB families.`,
  },
  FIES: {
    title: 'FIES (Food Insecurity Experience Scale)',
    description: `The Food Insecurity Experience Scale (FIES) runs 0 to 8, where a higher score means more severe insecurity. It is based on self-reported experiences like skipping meals or running out of food. FIES captures the stress and uncertainty of accessing enough safe, nutritious food. Even if a household has some variety, anxiety or shortfalls indicate insecurity.

    • Control's FIES rose by +0.71, while NSB families dropped by -1.20.
    • Net difference = -1.91 (36% improvement).`,
  },
  'Energy Intake': {
    title: 'Energy Intake (kcal/day)',
    description: `Total daily calories consumed by the main female adult, measured by a 24-hour recall of all meals and ingredients. Sufficient energy intake is crucial to prevent undernourishment, especially during economic shocks. When staple prices spike, people often reduce total calories.

    • Control decreased by -154 kcal/day, whereas NSB gained +352 kcal/day.
    • Net difference = +506 kcal/day (30.2% higher).`,
  },
  'Protein Intake': {
    title: 'Protein Intake (g/day)',
    description: `Protein intake measures grams of protein consumed by the main female adult in the past 24 hours. Adequate protein is critical for muscle maintenance, immune function, and childbearing health. Inflation usually makes protein-rich foods less accessible.

    • Control dropped by -13.9 g/day, while NSB rose by +24.6 g/day.
    • Net difference = +38.5 g/day, a 59.7% improvement.`,
  },
  'Iron Intake': {
    title: 'Iron Intake (mg/day)',
    description: `Iron is key to preventing anemia. We measure daily iron consumption via detailed dietary recall for the main female adult in the household. Iron deficiency leads to serious health risks, especially for women of childbearing age. In times of inflation, iron-rich foods become harder to afford.

    • Control group changed by -1.82 mg/day, while NSB increased by +3.87 mg/day.
    • Net difference = +5.69 mg/day (66% improvement).`,
  },
};

const NSBOverview = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);

  const handleSpokeClick = (metric) => {
    setSelectedMetric(metric);
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 md:p-8 text-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Nutrition-Sensitive Box: Protecting Food Security
      </h1>
      <div className="bg-gray-100 bg-opacity-20 rounded-lg p-3 md:p-4 mb-6 w-full max-w-2xl">
        <p className="text-base md:text-lg text-center">
          Facing high inflation, our Nutrition-Sensitive Box (NSB) was designed to go beyond staples by including
          protein- and iron-rich foods. This approach helps families maintain dietary quality and overall food
          security, even as prices soar.
        </p>
      </div>

      <div className="w-full max-w-md md:max-w-xl">
        {/* Interactive Spider Chart */}
        <RadarChart width={500} height={400} data={data} cx="50%" cy="50%" outerRadius="80%">
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="#fff" onClick={(e) => handleSpokeClick(e.value)} />
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

      <Button
        className="mt-6 md:mt-8 transform transition-transform active:scale-95"
        onClick={() => router.push('/main-menu')}
      >
        BACK TO MAIN MENU
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{metricDetails[selectedMetric]?.title || 'Metric Details'}</DialogTitle>
            <DialogDescription>
              {metricDetails[selectedMetric]?.description || 'No details available for this metric.'}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NSBOverview;
