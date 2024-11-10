import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div 
      ref={ref} 
      className="mt-10 w-full max-w-[600px] bg-[#6362623f] min-h-[100px] rounded-md flex justify-around items-center flex-wrap p-4 text-white gap-5"
    >
      <div className="flex flex-col items-center">
        {inView && (
          <CountUp end={3} duration={2} suffix="+" className="text-sm sm:text-2xl font-bold text-primary" />
        )}
        <p className="mt-1 text-xs sm:text-sm">Experiences</p>
      </div>
      
      <div className="flex flex-col items-center sm:border-l border-gray-500 px-4">
        {inView && (
          <CountUp end={20} duration={2} suffix="+" className="text-sm sm:text-2xl font-bold text-primary" />
        )}
        <p className="mt-1 text-xs sm:text-sm">Project done</p>
      </div>
      
      <div className="flex flex-col items-center sm:border-l border-gray-500 px-4">
        {inView && (
          <CountUp end={30} duration={2} suffix="+" className="text-sm sm:text-2xl font-bold text-primary" />
        )}
        <p className="mt-1 text-xs sm:text-sm">Happy Clients</p>
      </div>
    </div>
  );
};

export default Stats;
