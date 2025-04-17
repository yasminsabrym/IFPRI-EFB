'use client';

import React, {useState, useMemo, useEffect} from 'react';
import Link from 'next/link';
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
  ResponsiveContainer,
} from 'recharts';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from '@/components/ui/dialog';
import {motion} from 'framer-motion';
import {useMediaQuery} from '@/hooks/use-media-query';
import {Logo} from '@/components/logo';

const data = [
  {
    subject: 'HDDS',
    Baseline: 9.74,
    Control: 9.06,
    NSB: 9.97,
    // fullMark: 6,
  },
  {
    subject: 'FIES',
    Baseline: 5.12,
    Control: 5.66,
    NSB: 4.9,
    // fullMark: 5,
  },
  {
    subject: 'Energy Intake',
    Baseline: 1675,
    Control: 1521,
    NSB: 2027,
    // fullMark: 3000,
  },
  {
    subject: 'Protein Intake',
    Baseline: 45,
    Control: 31.1,
    NSB: 55.7,
    // fullMark: 100,
  },
  {
    subject: 'Iron Intake',
    Baseline: 8,
    Control: 6.18,
    NSB: 9.87,
    // fullMark: 20,
  },
];

const metricDetails = {
  HDDS: {
    title: 'HDDS (Household Dietary Diversity Score)',
    subtitle1: 'What It Is',
    description1: 'The Household Dietary Diversity Score (HDDS) counts how many different food groups a household consumes. It ranges from 0 (no variety) to 12 (high variety).',
    subtitle2: 'Why It Matters',
    description2: 'A higher HDDS means better diet quality and typically indicates greater economic access to food. When inflation rises, diet diversity often suffers.',
    subtitle3: 'NSB Results vs. Control',
    description3: 'Control changed by -0.64 points from baseline, while NSB increased by +0.87.',
    description4: 'Net difference = +1.51 points, a 15.6% improvement for NSB families.',
  },
  FIES: {
    title: 'FIES (Food Insecurity Experience Scale)',
    subtitle1: 'What It Is',
    description1: 'The Food Insecurity Experience Scale (FIES) runs 0 to 8, where a higher score means more severe insecurity. It is based on self-reported experiences like skipping meals or running out of food.',
    subtitle2: 'Why It Matters',
    description2: 'FIES captures the stress and uncertainty of accessing enough safe, nutritious food. Even if a household has some variety, anxiety or shortfalls indicate insecurity.',
    subtitle3: 'NSB Results vs. Control',
    description3: "Control's FIES rose by +0.71, while NSB families dropped by -1.20.",
    description4: 'Net difference = -1.91 (36% improvement).',
  },
  'Energy Intake': {
    title: 'Energy Intake (kcal/day)',
    subtitle1: 'What It Is',
    description1: 'Total daily calories consumed by the main female adult, measured by a 24-hour recall of all meals and ingredients.',
    subtitle2: 'Why It Matters',
    description2: 'Sufficient energy intake is crucial to prevent undernourishment, especially during economic shocks. When staple prices spike, people often reduce total calories.',
    subtitle3: 'NSB Results vs. Control',
    description3: 'Control decreased by -154 kcal/day, whereas NSB gained +352 kcal/day.',
    description4: 'Net difference = +506 kcal/day (30.2% higher).',
  },
  'Protein Intake': {
    title: 'Protein Intake (g/day)',
    subtitle1: 'What It Is',
    description1: 'Protein intake measures grams of protein consumed by the main female adult in the past 24 hours.',
    subtitle2: 'Why It Matters',
    description2: 'Adequate protein is critical for muscle maintenance, immune function, and childbearing health. Inflation usually makes protein-rich foods less accessible.',
    subtitle3: 'NSB Results vs. Control',
    description3: 'Control dropped by -13.9 g/day, while NSB rose by +24.6 g/day.',
    description4: 'Net difference = +38.5 g/day, a 59.7% improvement.',
  },
  'Iron Intake': {
    title: 'Iron Intake (mg/day)',
    subtitle1: 'What It Is',
    description1: 'Iron is key to preventing anemia. We measure daily iron consumption via detailed dietary recall for the main female adult in the household.',
    subtitle2: 'Why It Matters',
    description2: 'Iron deficiency leads to serious health risks, especially for women of childbearing age. In times of inflation, iron-rich foods become harder to afford.',
    subtitle3: 'NSB Results vs. Control',
    description3: 'Control group changed by -1.82 mg/day, while NSB increased by +3.87 mg/day.',
    description4: 'Net difference = +5.69 mg/day (66% improvement).',
  },
};

const NSBOverview = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width: 640px)'); // Define the breakpoint
  const isMediumScreen = useMediaQuery('(max-width: 768px)');

  const chartData: any = useMemo(() => {
    return data.map(item => ({
      ...item,
      fullMark: Math.max(item.Baseline, item.Control, item.NSB) * 1.2, // Adjust fullMark dynamically
    }));
  }, []);


  const handleSpokeClick = (metric) => {
    setSelectedMetric(metric);
    setOpen(true);
  };

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.4},
    },
  };

  const chartVariants = {
    hidden: {scale: 0.5, opacity: 0},
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  const chartHeight = isSmallScreen ? 300 : 400;
  const chartFontSize = isSmallScreen ? 10 : 12;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        router.push('/');
      }, 60000); // 25 seconds
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer); // Changed from keydown to keypress

    resetTimer(); // Initial call to start the timer

    return () => {clearTimeout(timeoutId); window.removeEventListener('mousemove', resetTimer); window.removeEventListener('keydown', resetTimer);};
  }, [router]);

  return (
    <motion.div
      className="flex flex-col items-center justify-start min-h-screen p-4 md:p-8 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <Logo/>
      <motion.h1
        className="text-2xl md:text-3xl font-semibold mb-4 text-center handjet text-accent"
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1, transition: {duration: 0.8, delay: 0.3}}}
      >
        {/* INSERT PAGE TITLE */}
        Nutrition-Sensitive Box: Protecting Food Security
      </motion.h1>
      <motion.div
        className=" rounded-lg p-3 md:p-4 mb-6 w-full max-w-2xl"
        style={{backgroundColor: 'rgba(128, 128, 128, 0.3)'}}
        initial={{opacity: 0}}
        animate={{opacity: 0.8, transition: {duration: 0.8, delay: 0.5}}}
      >
        <p className="text-base md:text-lg text-center" style={{color: '#F2F5FA'}}>
          {/* INSERT PAGE SUBTITLE  */}
          Facing high inflation, our Nutrition-Sensitive Box (NSB) was designed to go beyond staples by including
          protein- and iron-rich foods. This approach helps families maintain dietary quality and overall food
          security, even as prices soar.
        </p>
      </motion.div>
      {/* <motion.div
  className="rounded-lg p-3 md:p-4 mb-6 w-full max-w-2xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.8, transition: { duration: 0.8, delay: 0.5 } }}
  style={{backgroundColor: 'rgba(128, 128, 128, 0.3)'}}

>
  <div className="flex items-center justify-center gap-2 text-sm">
   
    <img
      width={20}
      height={20}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQ0lEQVR4nO3cz4tNYRzH8c93JkNGoRTyKzYjUST+ACk12dDcoqaZuc9zXD9KZCEKU0Q22PgZdtho/MivBTbTSJkdKyaKhcJGFpMZ5aszY0gG9zz3fOfknM+77mbmTn27r54zZ+Y+9wEYY4wxxhhjjDHGGGOMMcYYY4yx2tIIs9VhlzrpUic96uSROrmhHnu1jAV8fccoLaFevRxSLwPqRUd9OPmiXk5oBeMIYw3i5OwfIX6HuUIQS4wIa6rG/PHAeqJYgTi5lxjESTdBLDBKaFAv/QEgg9qKRqKkDVLB3OSXqxEUNBEkbRCHxcEgHisJkj5IUzBIhKUESR9kXjBIBQsJkjZIO2bUsELmEyR9kCk1rJCZBEkfZEIwyFZMJUjaIICol6+BK2QiQQxSJ5+DQEqoJ4gNyMcAkAFiGKVO3gWAfCKIHcjrAJD3BLEDeR4A8oYgViBeniYGcdJHECsQJ08CVsgzgtiBdAeA9BLECsTL/YBLVg9BrECc3ApYIQ8IYgdyNQDkNkGsQLxcCrhkdRHEDuRCAMhlgliBODkZcMm6SBArEC/HAlbIaYLYgRwOADlOEDMQHAgAOUIQO5DdyUHQSRArEIcdyX+pYw9BrEA8NicGKWMnQaxAymgLuGRtIYgVSIS1iUEitBDECqSMRQErZBlBLPdmOXmb4Jb3A7cAGacO+xKAHLSep/DpdoxXJ4+rAOmNt58W/gUbi7QVjerl1KgfjY4/wubljG7DJGKMcVrBZPVo1giV4b9R0BzvkicEY4wx9r8eKNCGWUOnA5XQkPU8hUw7UacOG+I9V7/c+sa3vE4eDn2vE3VZz1mINF4N8flY//4rvSd+btbz5jqtYJp6eZHgXyev1GN61nPnNvVyM/k7hnI967lzmW7CigCMkfdElmc9f+5SL0eDQbjzxADExQdcBoJ4uWYwUrHTkNPkfj7uZj1/7lIn52u4ZJ3Lev7cpRFagkHKWJf1/Pl8p9DLy4DV0Rf/bNbz5zItY/X3Q5KrxRjUCKuynjvXaYSNVZ5O2h8/N+t5C5F2YIk6ufO3u6r4OVnPWbi0A3OGt5di//BHFdAefy3ruRhjjDHGGGOMMcYYY4wxxhhjjCEPfQP2KgH9VaFnvwAAAABJRU5ErkJggg=="
      alt="exclamation-mark"
    />
  </div>
</motion.div> */}



      <div className="w-full max-w-md md:max-w-xl">
        {/* Interactive Spider Chart */}
        <motion.div variants={chartVariants} initial="hidden" animate="visible"
          className=" rounded-lg p-3 md:p-4 mb-6 w-full max-w-2xl"
          style={{backgroundColor: 'rgba(128, 128, 128, 0.3)'}}>
             <p className="text-sm text-center" style={{ color: '#70C16E', fontWeight: 'bold' }}>
      Tap any metric on the chart or their titles to learn more  !
    </p>
          <ResponsiveContainer width="100%" height={chartHeight} >
            <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="80%">
              <PolarGrid gridType="circle" stroke="#000000FF" />
              {/* Responsive font size for the subject labels */}
              <PolarAngleAxis
                dataKey="subject"
                stroke="#fff"
                // Dynamically set the font size based on screen size
                tick={{fontSize: isSmallScreen ? 8 : (isMediumScreen ? 10 : 12)}}
                onClick={(e) => handleSpokeClick(e.value)}
              />
              <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} stroke="#fff" tick={{fontSize: chartFontSize}}/>
              <Radar
                name="Baseline"
                dataKey="Baseline"
                stroke="#FFC107"
                fill="#FFC107"
                fillOpacity={0.7}
              />
              <Radar
                name="Control"
                dataKey="Control"
                stroke="#EE6363"
                fill="#EE6363"
                fillOpacity={0.7}
              />
              <Radar name="NSB" dataKey="NSB" stroke="#44BBA4" fill="#44BBA4" fillOpacity={0.7} />
              {/* Responsive font size for the tooltip */}
              <Tooltip contentStyle={{fontSize: chartFontSize}} />
              <Legend
                wrapperStyle={{
                  paddingTop: '20px',
                  color: '#B72424FF',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
        {/* Updated text color for better visibility */}
        <div className="text-sm text-white text-center">
        <span style={{color: '#FFC107'}}>•</span> Baseline (<span style={{color: '#FFC107'}}>Yellow line</span>) <span style={{color: '#EE6363'}}>•</span> Control Group Mid-Term (<span style={{color: '#EE6363'}}>Red line</span>) <span style={{color: '#44BBA4'}}>•</span> NSB Mid-Term (<span style={{color: '#44BBA4'}}>Green line</span>) 
          <br />
        </div>
      </div>

      <Link href="/main-menu" passHref>
        <Button className="mt-6 md:mt-8 transform transition-transform active:scale-95" style={{backgroundColor: '#70C16E', color: 'white'}}>
          BACK TO MAIN MENU
        </Button>
      </Link>

      <Dialog open={open} onOpenChange={setOpen}>
  <DialogContent style={{ backgroundColor: '#F2F5FA', color: '#003D6C' }}>
    <DialogHeader>
      <DialogTitle style={{ color: '#70C16E' }} className='handjet'>
        {metricDetails[selectedMetric]?.title || 'Metric Details'}
      </DialogTitle>
      <DialogDescription asChild>
        <div className="space-y-4 text-sm text-gray-800 leading-relaxed">
          {metricDetails[selectedMetric] ? (
            <>
              <div>
                <p className="font-semibold text-[#FF6301]">{metricDetails[selectedMetric].subtitle1}</p>
                <p>{metricDetails[selectedMetric].description1}</p>
              </div>
              <div>
                <p className="font-semibold text-[#FF6301]">{metricDetails[selectedMetric].subtitle2}</p>
                <p>{metricDetails[selectedMetric].description2}</p>
              </div>
              <div>
                <p className="font-semibold text-[#FF6301]">{metricDetails[selectedMetric].subtitle3}</p>
                <ul className="list-disc list-inside">
                  <li>{metricDetails[selectedMetric].description3}</li>
                  <li>{metricDetails[selectedMetric].description4}</li>
                </ul>
              </div>
            </>
          ) : (
            <p>No details available for this metric.</p>
          )}
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </motion.div>
  );
};

export default NSBOverview;
