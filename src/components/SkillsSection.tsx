import React, { useState } from 'react';

import ProgressCircle from '@/components/ProgressCircle';

interface Props {
  category: string; // the name of the skill category
  skills: Array<{ skill: string; percentage: number; image: string }>; // an array of skills with percentage and image
}

const SkillSection: React.FC<Props> = ({ category, skills }) => {
  // use state to track whether the section is expanded or collapsed
  const [expanded, setExpanded] = useState(false);

  // toggle the expanded state when clicking on the summary
  const handleClick = () => {
    setExpanded(!expanded);
  };

  // sort the skills by level in descending order
  const sortedSkills = skills.sort((a, b) => b.percentage - a.percentage);

  return (
    <div className='mb-4 rounded-lg bg-dark outline outline-2 outline-primary-800 duration-300'>
      <summary
        className='h2 cursor-pointer list-none bg-inherit px-5 py-3'
        onClick={handleClick}
      >
        {category}
      </summary>
      {expanded && (
        <div className='h4 grid grid-cols-2 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {sortedSkills.map((skill) => (
            <ProgressCircle
              key={skill.skill}
              skill={skill.skill}
              percentage={skill.percentage}
              image={skill.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillSection;
