'use client';

import React, {useState, useCallback, useEffect} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Cell,
} from 'recharts';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {motion} from 'framer-motion';

const TimeLineChart = ({data}: {data: {name: string; no: number; moderate: number; severe: number}[]}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    // Initial check
    handleOrientationChange();

    // Listen for changes
    window.addEventListener('resize', handleOrientationChange);

    // Clean up listener
    return () => window.removeEventListener('resize', handleOrientationChange);
  }, []);

  const handleNodeClick = (nodeName: string) => {
    setSelectedNode(nodeName);
    setOpen(true);
  };

  const closePopup = useCallback(() => {
    setOpen(false);
  }, []);

  const chartData = selectedNode
    ? data
        .filter(item => item.name === selectedNode)
        .map(item => [
          {name: 'No Stunting', value: item.no, color: '#82ca9d'},
          {name: 'Moderate Stunting', value: item.moderate, color: '#f0ad4e'},
          {name: 'Severe Stunting', value: item.severe, color: '#d9534f'},
        ])[0]
    : [];

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

  const barColors = ['#82ca9d', '#f0ad4e', '#d9534f'];

  return (
    <motion.div className="relative" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="flex flex-row items-center justify-around w-full py-4 overflow-x-auto">
        {data.map(node => (
          <div
            key={node.name}
            className="flex flex-col items-center justify-center min-w-[100px]"
            onClick={() => handleNodeClick(node.name)}
          >
            <motion.button
              className="w-12 h-12 md:w-20 md:h-20 rounded-full border-4 focus:outline-none"
              style={{borderColor: '#003D6C'}}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            />
            <span className="mt-2 text-white text-xs md:text-sm whitespace-nowrap">{node.name}</span>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white text-black">
          <DialogHeader>
            <DialogTitle>{selectedNode}</DialogTitle>
          </DialogHeader>
          {selectedNode && chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} layout={isLandscape ? 'horizontal' : 'vertical'}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" type="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                  <LabelList dataKey="value" position="top" />
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
