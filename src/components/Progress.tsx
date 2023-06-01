import React from 'react';

interface Props {
  skill: string; // the name of the skill or language
  level: number; // the mastery level from 0 to 100
}

const Progress: React.FC<Props> = ({ skill, level }) => {
  return (
    <div className='flex items-center space-x-4'>
      <span className='text-lg font-bold'>{skill}</span>
      <div className='h-4 flex-1 rounded-full bg-gray-200'>
        <div
          className='h-full rounded-full bg-green-500'
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className='text-lg font-bold'>{level}%</span>
    </div>
  );
};

export default Progress;
