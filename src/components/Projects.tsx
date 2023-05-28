import React from 'react';

import Chip from '@/components/buttons/Chip';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

const Projects = () => {
  // You can use an array of objects to store your project data
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of project one.',
      image: '/favicon/android-chrome-512x512.png',
      link: 'https://project-one.com',
      chips: [
        { text: 'React' },
        { text: 'TypeScript' },
        { text: 'Tailwind CSS' },
        { text: 'Next.js' },
        { text: 'GraphQL' },
        { text: 'Firebase' },
        { text: 'React' },
        { text: 'TypeScript' },
        { text: 'Tailwind CSS' },
        { text: 'Next.js' },
        { text: 'GraphQL' },
        { text: 'Firebase' },
      ],
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of project two.',
      image: '/images/logos/css.png',
      link: 'https://project-two.com',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of project three.',
      image: '/images/logos/react.png',
      link: 'https://project-three.com',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A brief description of project four.',
      image: '/images/logos/python.png',
      link: 'https://project-four.com',
    },
  ];

  return (
    <section id='projects' className='py-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='flex overflow-hidden rounded-lg border border-primary-900 shadow-md hover:border-dashed'
            >
              <div className='flex flex-1 grow flex-col content-between justify-between'>
                <div className='flex justify-center'>
                  <NextImage
                    src={project.image}
                    alt={project.title}
                    className='m-4 w-24 object-cover md:w-32 '
                    width={900}
                    height={900}
                  />
                </div>
                <div className='flex grow flex-col justify-end p-4'>
                  <h3 className='mb-2 text-xl font-semibold'>
                    {project.title}
                  </h3>
                  <div className='flex flex-wrap'>
                    {project.chips?.map((chip) => (
                      <Chip key={chip.text} text={chip.text} />
                    ))}
                  </div>
                  <p className='mb-2 indent-3'>{project.description}</p>
                  <ButtonLink
                    className='mt-3 justify-self-end'
                    href={project.link}
                    variant='outline'
                  >
                    View Project Details
                  </ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
