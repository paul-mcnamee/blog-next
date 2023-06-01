import React from 'react';

import Layout from '@/components/layout/Layout';
import Projects from '@/components/Projects';
import Seo from '@/components/Seo';

export default function ProjectsPage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <header>
          <h1 className='mt-4 text-center'>Projects</h1>
          <p className='mt-3 flex place-content-center'>
            Over the years I have had many projects that don't get to see the
            light of day. These are some of the projects that are finished or
            fairly close to being finished.
          </p>
        </header>
        <Projects />
      </main>
    </Layout>
  );
}
