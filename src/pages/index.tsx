import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <Vercel className='text-5xl' />
          <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className='mt-2'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky{' '}
          </p>

          <p className='mt-2'>
            <ArrowLink href='https://github.com/paulmcnamee/ts-nextjs-tailwind-starter'>
              See the repository
            </ArrowLink>
          </p>

          <ButtonLink className='mt-6' href='/components' variant='outline'>
            See all components
          </ButtonLink>

          <UnstyledLink
            href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fpaulmcnamee%2Fts-nextjs-tailwind-starter'
            className='mt-4'
          ></UnstyledLink>
        </div>
      </main>
    </Layout>
  );
}
