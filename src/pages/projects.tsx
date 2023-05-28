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
        </header>
        <Projects />
      </main>
    </Layout>
  );
}
