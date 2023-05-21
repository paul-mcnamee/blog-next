import * as React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';

const links = [
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50'>
      <div className='layout flex items-center justify-between py-3'>
        <PrimaryLink href='/' className='font-bold'>
          Home
        </PrimaryLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <PrimaryLink href={href}>{label}</PrimaryLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
