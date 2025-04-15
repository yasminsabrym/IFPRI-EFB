'use client';

import React, {Fragment, useState} from 'react';
import {motion} from 'framer-motion';
import {Dialog, Transition} from '@headlessui/react';

const TimeLineChart = ({data}: {data: {name: string; no: number; moderate: number; severe: number}[]}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const handleNodeClick = (nodeName: string) => {
    setSelectedNode(nodeName);
  };

  const closePopup = () => {
    setSelectedNode(null);
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-around w-full h-96 md:h-64">
        {data.map(node => (
          <div key={node.name} className="flex flex-col items-center justify-center h-full">
            <button
              className="w-20 h-20 rounded-full border-4 border-blue-500 focus:outline-none"
              style={{borderColor: '#003D6C'}}
              onClick={() => handleNodeClick(node.name)}
            ></button>
            <span className="mt-2 text-white">{node.name}</span>
          </div>
        ))}
      </div>
      <Transition appear show={selectedNode !== null} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closePopup}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                className="text-white"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all text-black">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {selectedNode}
                  </Dialog.Title>
                  <div>
                    {data
                      .filter(item => item.name === selectedNode)
                      .map(item => (
                        <div key={item.name}>
                          <div>
                            <p>No Stunting: {item.no}%</p>
                            <p>Moderate Stunting: {item.moderate}%</p>
                            <p>Severe Stunting: {item.severe}%</p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium  hover: focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      style={{
                        backgroundColor: '#70C16E',
                        color: 'white',
                      }}
                      onClick={closePopup}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
    </div>
  );
};

export default TimeLineChart;
