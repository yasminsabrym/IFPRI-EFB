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
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#70C16E"/>
  </svg>
);

const TwoMonthsBaby = () => {
  return (
    <Image
      src="data:image/png;base64,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"
      alt="child-with-pacifier"
      width={80}
      height={80}
    />
  );
};

const FourMonthsBaby = () => (
  <Image
    src="data:image/png;base64,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"
    alt="infant-massage"
    width={80}
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
