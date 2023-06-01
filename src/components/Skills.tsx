import React from 'react';

import SkillSection from '@/components/SkillsSection';

const Portfolio: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <SkillSection
        category='Programming Languages'
        skills={[
          { skill: 'C#', percentage: 85, image: '/images/logos/csharp.png' },
          {
            skill: 'ASP.NET',
            percentage: 75,
            image: '/images/logos/dotnet.png',
          },
          { skill: 'SQL', percentage: 75, image: '/images/logos/sql.png' },
          {
            skill: 'Python',
            percentage: 70,
            image: '/images/logos/python.png',
          },
          { skill: 'HTML', percentage: 70, image: '/images/logos/hmtl.svg' },
          { skill: 'CSS', percentage: 70, image: '/images/logos/css.png' },
          {
            skill: 'TypeScript',
            percentage: 65,
            image: '/images/logos/ts.png',
          },
          {
            skill: 'JavaScript',
            percentage: 65,
            image: '/images/logos/js.jpg',
          },
          { skill: 'PHP', percentage: 35, image: '/images/logos/php.png' },
          { skill: 'c++', percentage: 30, image: '/images/logos/c++.png' },
        ]}
      />
      <SkillSection
        category='Front End Frameworks'
        skills={[
          { skill: 'Ember', percentage: 65, image: '/images/logos/ember.png' },
          {
            skill: 'Angular',
            percentage: 55,
            image: '/images/logos/angular.png',
          },
          { skill: 'Vue', percentage: 65, image: '/images/logos/vue.png' },
          { skill: 'React', percentage: 40, image: '/images/logos/react.png' },
        ]}
      />
      <SkillSection
        category='Game Development Frameworks'
        skills={[
          { skill: 'Unity', percentage: 65, image: '/images/logos/unity.svg' },
          {
            skill: 'Godot',
            percentage: 35,
            image: '/images/logos/godot.svg',
          },
        ]}
      />
      <SkillSection
        category='Other Frameworks'
        skills={[
          {
            skill: 'Flutter',
            percentage: 45,
            image: '/images/logos/flutter.svg',
          },
        ]}
      />
      <SkillSection
        category='Software Proficiency'
        skills={[
          {
            skill: 'Visual Studio',
            percentage: 90,
            image: '/images/logos/visualstudio.png',
          },
          {
            skill: 'Jetbrains Suite',
            percentage: 90,
            image: '/images/logos/jetbrains.png',
          },
          {
            skill: 'Blender',
            percentage: 30,
            image: '/images/logos/blender.svg',
          },
          {
            skill: 'MS Excel',
            percentage: 90,
            image: '/images/logos/excel.png',
          },
          { skill: 'MS Word', percentage: 80, image: '/images/logos/word.png' },
          {
            skill: 'MS PowerPoint',
            percentage: 80,
            image: '/images/logos/powerpoint.png',
          },
          {
            skill: 'MS Access',
            percentage: 70,
            image: '/images/logos/access.png',
          },
          {
            skill: 'Photoshop',
            percentage: 60,
            image: '/images/logos/photoshop.png',
          },
          {
            skill: 'Solid Works',
            percentage: 50,
            image: '/images/logos/solidworks.png',
          },
          {
            skill: 'AutoCAD',
            percentage: 50,
            image: '/images/logos/autocad.png',
          },
          { skill: 'Revit', percentage: 40, image: '/images/logos/revit.png' },
          {
            skill: 'Illustrator',
            percentage: 30,
            image: '/images/logos/illustrator.png',
          },
        ]}
      />
    </div>
  );
};

export default Portfolio;
