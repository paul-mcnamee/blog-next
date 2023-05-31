import React from 'react';

import Chip from '@/components/buttons/Chip';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

const Projects = () => {
  // You can use an array of objects to store your project data
  const projects = [
    {
      title: 'Life Calendar', // TODO: link the markdown page from the old website instead of using the link to the play store
      description:
        'Life Calendar App allows you to keep track of your daily tasks, and organize your thoughts each day with a simple interface.',
      image: '/images/logos/lifecalendar.webp',
      link: 'https://play.google.com/store/apps/details?id=com.FourthMouse.FlopHop',
      chips: [{ text: 'Flutter' }, { text: 'Firebase' }, { text: 'Android' }],
      id: 'life-calendar',
    },
    {
      title: 'Flop Hop', // TODO: link the markdown page from the old website instead of using the link to the play store
      description:
        'This arcade game features a space bunny dodging asteroids and collecting stars. Fly by asteroids and capture as many stars as possible to help the space bunny astronaut return home in time for dinner!',
      image: '/images/logos/flophop.webp',
      link: 'https://play.google.com/store/apps/details?id=com.FourthMouse.FlopHop',
      chips: [
        { text: 'C#' },
        { text: 'Unity' },
        { text: 'Android' },
        { text: 'Game Development' },
      ],
      id: 'flop-hop',
    },
    {
      title: 'Mischief',
      description:
        'Streamers get their own page to sell the games they play and show off information to their community like socials, stats, and other things that make them unique! This website was essentially another affiliate channel for streamers to sell games. The website aimed to purchase games in bulk or facilitate the sale via other api integrations.',
      image: '/images/logos/mischieflogowhite.svg',
      link: 'https://www.mischief.gg',
      chips: [
        { text: 'Angular' },
        { text: 'Firebase' },
        { text: 'Google Cloud Platform' },
        { text: 'TypeScript' },
        { text: 'Python' },
        { text: 'CircleCI' },
      ],
      id: 'mischief',
    },
    {
      title: 'Hail Bounce', // TODO: link the markdown page from the old website instead of using the link to the play store
      description:
        'Hail bounce is a side-scrolling mobile game featuring 2D retro style graphics. The objective is to fly through clouds and gain hail points. Fight gravity and the increasing storm winds to achieve the highest score to brag to your friends. Avoid falling out of the cloud cycle or falling to the ground.',
      image: '/images/logos/hailbounce.webp',
      codeUrl: '/post/unity-game-hail-bounce',
      link: '/posts/unity-game-hail-bounce',
      chips: [
        { text: 'C#' },
        { text: 'Unity' },
        { text: 'Android' },
        { text: 'Game Development' },
      ],
      id: 'hail-bounce',
    },
    {
      title: 'Personal Website (Vue)',
      description:
        'This is the previous iteration of my website, it was designed from scratch using a bunch of new web technology (at the time) that I thought was interesting to me and will host some information that I would like to share with the rest of the world relating to myself and my active pursuits.',
      image: '/images/githubprofileportrait.jfif',
      link: 'https://github.com/paul-mcnamee/blog',
      chips: [
        { text: 'vue' },
        { text: 'nuxt' },
        { text: 'vuetify' },
        { text: 'netlify' },
        { text: 'markdown' },
        { text: 'JavaScript' },
      ],
      id: 'personal-website',
    },
    {
      title: 'LeDavin',
      description:
        'Custom dress shirt store where the user could enter measurements through a simple guided system. The shirts were then to be sourced and sent to the user directly through multiple vendors. This project unfortunately never launched, and is not currently hosted anywhere.',
      image: '/images/logos/Leo-the-ledavin-lion.svg',
      link: 'https://github.com/paul-mcnamee/ledavin',
      chips: [{ text: 'PHP' }, { text: 'JavaScript' }, { text: 'jQuery' }],
      id: 'ledavin',
    },
    {
      title: 'Fat Kid Wallet',
      description:
        'You know those fat kid cards you get at restaurants where you eat there 10 times and get a free meal? This consolidates those into your very own fat kid wallet.',
      image: '/images/logos/fkw.jpg',
      link: 'https://github.com/paul-mcnamee/FatKidWallet',
      chips: [{ text: 'PHP' }, { text: 'JavaScript' }],
      id: 'fat-kid-wallet',
    },
    {
      title: 'Workout Buddy',
      description:
        'This was originally thought of as an app, it only got as far as scraping a bunch of data for gym locations though. I had a lot of fun and learned a lot about web scraping and python in the process.',
      image: '/images/logos/workoutbuddy.png',
      codeUrl: 'https://github.com/paul-mcnamee/WorkoutBuddy',
      link: 'https://github.com/paul-mcnamee/WorkoutBuddy/tree/master/WorkoutBuddyDataScraper',
      chips: [{ text: 'Python' }, { text: 'Web Scraping' }],
      id: 'workout-buddy',
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
              <div className='flex flex-1 flex-col justify-between'>
                <div className='flex justify-center'>
                  <NextImage
                    src={project.image}
                    alt={project.title}
                    className='m-4 w-24 md:w-32 '
                    width={900}
                    height={900}
                  />
                </div>
                <div className='flex flex-col p-4'>
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
                    className='mt-3'
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