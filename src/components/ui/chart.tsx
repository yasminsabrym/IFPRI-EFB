'use client';

import React, {useState, useMemo} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from './dialog';
import {motion} from 'framer-motion';
import {useMediaQuery} from '@/hooks/use-media-query';
import Image from 'next/image';

const BaselineBaby = () => (
  <Image
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGUlEQVR4nO2YTWrDQAyFdYmW9FTtMUpAPzC5XyKb1sHtKlnkKFkmTBOnrrHbrFxp0AfCAzMLvXkIaQwQBD6RDW5F8R28I0qnHOAdCSHGCEesEY5YIxyxRjhiDZeOsFIlG/pMb6+PU0LyXj7DSg1YRRTbS+K478T0hXyJUNxfz7RgFazwgZV2OVFWOojKUydkuLdaLxdgmfTz1q/f/vrbLfNg7/b74cKJv8S4FDEU41pER64HNzVhDlGshwVqN7AuQggrVbO6XAyphGJPty7vqJvf0xDz7AWewF9GFDdiUglDI46M6lNjvGlnWOmjiIcVKzVFPHWL+fkwRgixRjhijXDEGuGINYpxhJWOOcA7XPGLKD7/dx4BzMwZoh53q2biigUAAAAASUVORK5CYII="
    alt="baseline"
    width={80}
    height={80}
  />
);

const TwoMonthsBaby = () => {
  return (
    <Image
      src="data:image/png;base64,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" alt="babys-room"
      width={80}
      height={80}
    />
  );
};

const FourMonthsBaby = () => (
  <Image
src="data:image/png;base64,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" alt="baby-bottle"  width={80}
    height={80}
  />
);

const TimeLineChart = ({
  data,
}: {
  data: {name: string; no: number; moderate: number; severe: number}[];
}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const isMediumScreen = useMediaQuery('(max-width: 768px)');

  const handleNodeClick = (nodeName: string) => {
    setSelectedNode(nodeName);
    setOpen(true);
  };

  const chartData = useMemo(() => {
    if (selectedNode) {
      const found = data.find(item => item.name === selectedNode);
      if (found) {
        return [
          {name: 'No Stunting', value: found.no, color: '#82ca9d'},
          {name: 'Moderate', value: found.moderate, color: '#f0ad4e'},
          {name: 'Severe', value: found.severe, color: '#d9534f'},
        ];
      }
    }
    return [];
  }, [selectedNode, data]);

  const renderCustomizedLabel = (props: any) => {
    const {x, y, width, height, value} = props;
    const radius = 10;

    if (isNaN(x)) {
      return null;
    }

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#666"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={isSmallScreen ? '0.5rem' : '0.7rem'}
        >
          {value}
        </text>
      </g>
    );
  };

  const chartHeight = isSmallScreen ? 150 : 300; // Adjusted height for better mobile view
  const xAxisFontSize = isSmallScreen ? '0.6rem' : '0.7rem';
  const barWidth = isSmallScreen ? 15 : 30; // Adjusted bar width for mobile

  const orientation = isSmallScreen ? 'vertical' : 'horizontal';

  return (
    <motion.div className="relative">
      <div className="flex flex-row items-center justify-around w-full py-4 overflow-x-auto">
        {data.map(node => (
          <motion.div
            key={node.name}
            className="flex flex-col items-center justify-center min-w-[100px]"
            onClick={() => handleNodeClick(node.name)}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border-4" style={{borderColor: '#70C16E'}}>
              {node.name === 'Baseline (Birth)' && <BaselineBaby />}
              {node.name === '2 Months' && <TwoMonthsBaby />}
              {node.name === '4 Months' && <FourMonthsBaby />}
            </div>
            <span className="mt-2 text-white text-xs md:text-sm whitespace-nowrap">{node.name}</span>
          </motion.div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white text-black max-w-[95vw] sm:max-w-[600px] min-h-[300px]">
          <DialogHeader>
            <DialogTitle>{selectedNode}</DialogTitle>
          </DialogHeader>
          {chartData && chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={chartHeight}>
              <BarChart data={chartData} layout={orientation}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  style={{fontSize: xAxisFontSize}}
                  tick={{
                    angle: 0,
                    textAnchor: 'middle',
                  }}
                />
                <YAxis
                  tickFormatter={value => `${value}`}
                  style={{fontSize: isSmallScreen ? '0.5rem' : '0.7rem'}}
                />
                <Tooltip contentStyle={{fontSize: isSmallScreen ? '0.5rem' : '0.7rem'}}/>
                <Legend wrapperStyle={{fontSize: isSmallScreen ? '0.5rem' : '0.7rem'}} />
                <Bar dataKey="value" className="bar" label={renderCustomizedLabel} width={barWidth}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No data available for {selectedNode}</p>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default TimeLineChart;
