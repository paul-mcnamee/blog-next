import React from 'react';

import NextImage from '@/components/NextImage';

interface Props {
  skill: string; // the name of the skill or language
  level: number; // the mastery level from 0 to 100
  image: string; // the url of the image to display in the center
}

const ProgressCircle: React.FC<Props> = ({ skill, level, image }) => {
  // calculate the stroke dash offset based on the level
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className='flex flex-col items-center space-y-2'>
      <span className='text-lg font-bold'>{skill}</span>
      <div className='relative h-32 w-32'>
        <svg
          className='absolute left-0 top-0 h-full w-full'
          viewBox='0 0 120 120'
        >
          <circle
            cx='60'
            cy='60'
            r={radius}
            fill='none'
            stroke='#E5E7EB'
            strokeWidth='20'
          />
          <circle
            cx='60'
            cy='60'
            r={radius}
            fill='none'
            stroke='#10B981'
            strokeWidth='20'
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <NextImage
          imgClassName='absolute left-0 top-0 h-full w-full rounded-full object-cover'
          src={image}
          alt={skill}
          width={300}
          height={200}
        />
      </div>
      <span className='text-lg font-bold'>{level}%</span>
    </div>
  );
};

export default ProgressCircle;
