'use client';

import React, { useState, useMemo } from 'react';
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
  Cell
} from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog';
import {motion} from 'framer-motion';

const TimeLineChart = ({
  data, // data: {name: string; no: number; moderate: number; severe: number}[]
}: {
  data: {name: string; no: number; moderate: number; severe: number}[];
}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

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

  return (
    <motion.div className="relative">
      <div className="flex flex-row items-center justify-around w-full py-4 overflow-x-auto">
        {data.map(node => ( // Keep the onClick handler for each node
          <motion.div
            key={node.name}
            className="flex flex-col items-center justify-center min-w-[100px]"
            onClick={() => handleNodeClick(node.name)} // Correctly placed onClick
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border-4" style={{borderColor: '#003D6C'}} />
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
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  style={{ fontSize: '0.7rem' }} // Responsive font size
                  tick={{
                    angle: -45,
                    textAnchor: 'end',
                    dx: -5,
                    dy: 10,
                  }}
                />
                <YAxis
                  tickFormatter={value => `${value}`}
                  style={{ fontSize: '0.7rem' }} // Responsive font size
                />
                <Tooltip
                  contentStyle={{ fontSize: '0.7rem' }} // Responsive font size in tooltip
                />
                <Legend
                  wrapperStyle={{ fontSize: '0.7rem' }} // Responsive font size in legend
                />
                <Bar dataKey="value" className="bar">
                  <LabelList
                    dataKey="value"
                    position="top"
                    style={{ fontSize: '0.7rem' }} // Responsive font size for labels
                    formatter={(value) => {
                      return value > 999 ? `${(value / 1000).toFixed(1)}k` : value;
                    }}
                  />
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color}
                    />
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
