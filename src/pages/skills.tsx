import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Skills from '@/components/Skills';

export default function ProjectsPage() {
  return (
    <Layout>
      <Seo templateTitle='Skills' />
      <main>
        <header>
          <h1 className='mt-4 text-center'>Skills</h1>
        </header>
        <Skills />
      </main>
    </Layout>
  );
}
