import Image from 'next/image';
import React from 'react';

import Chip from '@/components/buttons/Chip';
import ButtonLink from '@/components/links/ButtonLink';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Website',
      description:
        'You are looking at this one right now, it was designed from scratch using a bunch of new web technology that I thought was interesting to me and will host some information that I would like to share with the rest of the world relating to myself and my active pursuits.',
      image: '/images/githubprofileportrait.jfif',
      link: '/',
      chips: [
        { text: 'React' },
        { text: 'NextJS' },
        { text: 'Tailwind' },
        { text: 'netlify' },
        { text: 'markdown' },
        { text: 'TypeScript' },
      ],
      id: 'personal-website',
    },
    {
      title: 'Life Calendar',
      description:
        'Life Calendar App allows you to keep track of your daily tasks, and organize your thoughts each day with a simple interface.',
      image: '/images/logos/lifecalendar.webp',
      link: '/posts/life-calendar',
      chips: [{ text: 'Flutter' }, { text: 'Firebase' }, { text: 'Android' }],
      id: 'life-calendar',
    },
    {
      title: 'Flop Hop',
      description:
        'I made this in a day as a challenge to see how much I could get done with unity in one day. This arcade game features a space bunny dodging asteroids and collecting stars. Fly by asteroids and capture as many stars as possible to help the space bunny astronaut return home in time for dinner!',
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
      image: '/images/logos/mischief-icon.png',
      link: '/posts/mischief-gg',
      chips: [
        { text: 'Angular' },
        { text: 'Firebase' },
        { text: 'Google Cloud Platform' },
        { text: 'TypeScript' },
        { text: 'CircleCI' },
        { text: 'Stripe' },
        { text: 'Twitch' },
      ],
      id: 'mischief-gg',
    },
    {
      title: 'Hail Bounce',
      description:
        'Hail bounce is the first game I ever created with unity, it is a side-scrolling mobile game featuring 2D retro style graphics. The objective is to fly through clouds and gain hail points. Fight gravity and the increasing storm winds to achieve the highest score to brag to your friends. Avoid falling out of the cloud cycle or falling to the ground.',
      image: '/images/logos/hailbounce.webp',
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
      title: 'Require Component Checker',
      description:
        'A unity editor script designed to find all of the components which are currently in the project and have missing components denoted by the RequireComponent attribute',
      image: '/images/logos/unity.svg',
      link: 'https://github.com/paul-mcnamee/RequireComponentChecker',
      chips: [{ text: 'C#' }, { text: 'Unity' }, { text: 'Game Development' }],
      id: 'require-component-checker',
    },
    {
      title: 'Will It Compost',
      description:
        'I made Will It Compost because I could not find a good searchable resource for which materials were compostable at home.',
      image: '/images/logos/compostable.png',
      link: '/posts/will-it-compost',
      chips: [
        { text: 'gardening' },
        { text: 'vue' },
        { text: 'nuxt' },
        { text: 'vuetify' },
        { text: 'netlify' },
        { text: 'JavaScript' },
      ],
      id: 'will-it-compost',
    },
    {
      title: 'Personal Website (Vue)',
      description:
        'This is the previous iteration of my website, it was designed from scratch using a bunch of new web technology (at the time) that I thought was interesting to me and will host some information that I would like to share with the rest of the world relating to myself and my active pursuits.',
      image: '/images/githubprofileportrait.jfif',
      link: '/posts/vue-nuxt-vuetify-blog',
      chips: [
        { text: 'vue' },
        { text: 'nuxt' },
        { text: 'vuetify' },
        { text: 'netlify' },
        { text: 'markdown' },
        { text: 'JavaScript' },
      ],
      id: 'personal-website-vue',
    },
    {
      title: 'Twitch Clip Concatenator',
      description:
        'At the time there were a lot of youtube videos which were just combined clips from twitch in the form of a compilation video. I decided it would be fun to automate this.',
      image: '/images/logos/twitch.svg',
      link: '/posts/twitch-clip-concatenator',
      chips: [
        { text: 'api' },
        { text: 'twitch' },
        { text: 'youtube' },
        { text: 'python' },
        { text: 'batch' },
      ],
      id: 'twitch-clip-concatenator',
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
              <div className='flex flex-1 flex-col place-content-end'>
                <div className='flex justify-center'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='m-4 w-24 md:w-32 '
                    width={600}
                    height={600}
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
