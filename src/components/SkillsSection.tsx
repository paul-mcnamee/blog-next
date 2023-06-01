import React, { useState } from 'react';

import ProgressCircle from '@/components/ProgressCircle';

interface Props {
  category: string; // the name of the skill category
  skills: Array<{ skill: string; level: number; image: string }>; // an array of skills with level and image
}

const SkillSection: React.FC<Props> = ({ category, skills }) => {
  // use state to track whether the section is expanded or collapsed
  const [expanded, setExpanded] = useState(false);

  // toggle the expanded state when clicking on the summary
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='bg-gray-300 duration-300 open:bg-amber-200'>
      <summary
        className='cursor-pointer bg-inherit px-5 py-3 text-lg'
        onClick={handleClick}
      >
        {category}
      </summary>
      {expanded && (
        <div className='grid grid-cols-3 gap-4 border border-gray-300 bg-white px-5 py-3 text-sm font-light'>
          {skills.map((skill) => (
            <ProgressCircle
              key={skill.skill}
              skill={skill.skill}
              level={skill.level}
              image={skill.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillSection;
