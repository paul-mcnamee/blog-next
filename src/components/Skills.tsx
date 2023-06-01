import React from 'react';

import SkillSection from '@/components/SkillsSection';

const Portfolio: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold underline'>My Skills</h1>
      <SkillSection
        category='Frontend Development'
        skills={[
          {
            skill: 'ReactJS',
            level: 80,
            image: '/images/logos/csharp.png',
          },
          {
            skill: 'TypeScript',
            level: 70,
            image: '/images/logos/csharp.png',
          },
          {
            skill: 'Tailwind CSS',
            level: 90,
            image: '/images/logos/csharp.png',
          },
        ]}
      />
      <SkillSection
        category='Backend Development'
        skills={[
          {
            skill: 'Node.js',
            level: 75,
            image: '/images/logos/csharp.png',
          },
          {
            skill: 'Express.js',
            level: 80,
            image: '/images/logos/csharp.png',
          },
          {
            skill: 'MongoDB',
            level: 70,
            image: '/images/logos/csharp.png',
          },
        ]}
      />
    </div>
  );
};

export default Portfolio;
