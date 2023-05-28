import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

const About = () => {
  return (
    <section id='about' className='py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center space-x-8 md:flex-row'>
          <NextImage
            imgClassName='rounded-3xl object-cover'
            src='/images/selfie.jpg'
            width='640'
            height='480'
            alt='Profile'
          />
          <div className='max-w-lg'>
            <p className='mt-2 indent-4'>
              I create websites for small businesses and entrepreneurs to
              establish an online presence and flourish in the digital age. I
              automate the superfluous stuff, and streamline processes to pass
              on the cost savings to you. Recently I have been delving into the
              game development space as well.
            </p>
            <p className='mt-2 indent-4'>
              I have had a huge passion for computers, programming, gaming,
              mechanical things, and basically anything relating to how things
              work since I was pretty young.
            </p>
            <p className='mt-2 indent-4'>
              I love programming, but my interests definitely extend way beyond
              computers. Fun fact, I was heavily considering doing ceramics full
              time as a career path. In my free time around Denver Colorado, I
              like to hike, fish, snowboard, make beer (and drink it), and of
              course program.
            </p>
            <p className='text-md mt-3 indent-4 font-semibold'>
              Send me an email via Paul@FourthMouse.com, check out my projects,
              or Visit FourthMouse.com for more information.
            </p>
            <div className='flex flex-row items-center justify-evenly'>
              <ButtonLink className='mt-6' href='/projects' variant='outline'>
                View Projects
              </ButtonLink>
              <ButtonLink className='mt-6' href='resume.pdf' variant='outline'>
                Download Resume
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
