import React from 'react';

import About from '@/components/About';
// import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <header>
          <h1 className='mt-4 text-center'>Paul McNamee</h1>
        </header>
        <About />
      </main>
    </Layout>
  );
}
