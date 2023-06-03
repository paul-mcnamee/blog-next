import Image from 'next/image';
import React from 'react';

interface Props {
  skill: string; // the name of the skill or language
  percentage: number; // the mastery percentage from 0 to 100
  image: string; // the url of the image to display in the center
}

const ProgressCircle: React.FC<Props> = ({ skill, percentage, image }) => {
  // calculate the stroke dash offset based on the percentage
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className='flex flex-col items-center space-y-2'>
      <span className='text-lg font-bold'>{skill}</span>
      <div className='relative h-32 w-32'>
        <div className='absolute h-32 w-32'>
          <Image
            src={image}
            alt={skill}
            style={{
              height: undefined,
              width: '40%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            width={600}
            height={600}
          />
        </div>
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
            strokeWidth='10'
          />
          <circle
            cx='60'
            cy='60'
            r={radius}
            fill='none'
            stroke='#10b981'
            strokeWidth='10'
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressCircle;
