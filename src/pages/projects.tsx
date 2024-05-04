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
          <p className='m-6 flex place-content-center'>
            Here are some of the open source projects that I developed over the
            years. Not all of them are complete, but I have learned a lot from
            working on them so they are worth sharing so perhaps others can
            learn from them or enjoy using them.
          </p>
        </header>
        <Projects />
      </main>
    </Layout>
  );
}
