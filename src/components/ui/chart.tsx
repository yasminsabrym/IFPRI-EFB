'use client';

import React, {useState, useCallback} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {motion} from 'framer-motion';

const TimeLineChart = ({data}: {data: {name: string; no: number; moderate: number; severe: number}[]}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleNodeClick = (nodeName: string) => {
    setSelectedNode(nodeName);
    setOpen(true);
  };

  const closePopup = useCallback(() => {
    setOpen(false);
  }, []);

  const chartData = selectedNode
    ? data.filter(item => item.name === selectedNode).map(item => [
        {name: 'No Stunting', value: item.no},
        {name: 'Moderate Stunting', value: item.moderate},
        {name: 'Severe Stunting', value: item.severe},
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

  return (
    <motion.div className="relative" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="flex flex-row items-center justify-around w-full py-4 overflow-x-auto">
        {data.map(node => (
          <div key={node.name} className="flex flex-col items-center justify-center min-w-[100px]">
            <motion.button
              className="w-12 h-12 md:w-20 md:h-20 rounded-full border-4 focus:outline-none"
              style={{borderColor: '#003D6C'}}
              onClick={() => handleNodeClick(node.name)}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            ></motion.button>
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
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No data available for {selectedNode}</p>
          )}
        </DialogContent>
      </Dialog>

      <style jsx>{`
        .w-20 {
          width: 80px;
          height: 80px;
        }
        .h-96 {
          height: 350px;
        }
        @media (min-width: 768px) {
          .h-96 {
            height: 250px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default TimeLineChart;
