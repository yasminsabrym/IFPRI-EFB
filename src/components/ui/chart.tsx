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

const BaselineBaby = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#70C16E"/>
    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="white">
      B
    </text>
  </svg>
);

const TwoMonthsBaby = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#70C16E"/>
    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="white">
      2M
    </text>
  </svg>
);

const FourMonthsBaby = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#70C16E"/>
    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="white">
      4M
    </text>
  </svg>
);

const TimeLineChart = ({
  data, // data: {name: string; no: number; moderate: number; severe: number}[]
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
          {name: 'Moderate Stunting', value: found.moderate, color: '#f0ad4e'},
          {name: 'Severe Stunting', value: found.severe, color: '#d9534f'},
        ];
      }
    }
    return [];
  }, [selectedNode, data]);

  const renderCustomizedLabel = (props: any) => {
    const {x, y, width, height, value} = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#666"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={isSmallScreen ? '0.5rem' : '0.7rem'} // Responsive font size
        >
          {value}
        </text>
      </g>
    );
  };

  const barChartHeight = isSmallScreen ? 200 : 300;
  const xAxisFontSize = isSmallScreen ? '0.6rem' : '0.7rem';

  const orientation = isSmallScreen ? 'vertical' : 'horizontal'; // Responsive layout

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
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border-4" style={{borderColor: '#003D6C'}}>
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
            <ResponsiveContainer width="100%" height={barChartHeight}>
              <BarChart data={chartData} layout={orientation}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  style={{fontSize: xAxisFontSize}}
                  tick={{
                    angle: -45,
                    textAnchor: 'end',
                    dx: -5,
                    dy: 10,
                  }}
                />
                <YAxis
                  tickFormatter={value => `${value}`}
                  style={{fontSize: isSmallScreen ? '0.5rem' : '0.7rem'}}
                />
                <Tooltip contentStyle={{fontSize: isSmallScreen ? '0.5rem' : '0.7rem'}}/>
                <Legend wrapperStyle={{fontSize: isSmallScreen ? '0.5rem' : '0.7rem'}} />
                <Bar dataKey="value" className="bar" label={renderCustomizedLabel}>
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
