import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function div() {
  return (
    // yoink some stuff https://github.com/theodorusclarence/theodorusclarence.com/blob/5cbfd4d62839ec391b6c2e5d95815c53c0babdcf/src/components/layout/Footer.tsx
    // <footer className='mt-4 pb-2'>
    //   <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
    //     <FooterLinks />

    //     {spotifyFlag && <Spotify className='mt-8' />}

    //     <p className='mt-12 font-medium text-gray-600 dark:text-gray-300'>
    //       Reach me out
    //     </p>
    //     <SocialLinks />

    //     <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
    //       © Theodorus Clarence {new Date().getFullYear()}
    //       {feedbackFlag && (
    //         <>
    //           {' • '}
    //           <FeedbackFish projectId='59a0c0e0d549a7'>
    //             <button className='rounded-sm hover:text-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:hover:text-gray-100'>
    //               Got any feedback?
    //             </button>
    //           </FeedbackFish>
    //         </>
    //       )}
    //     </p>
    //   </main>
    // </footer>

    <footer className='sticky bottom-0 left-0 right-0 z-50 bg-dark text-gray-600'>
      <div className='flex flex-row justify-center gap-1 py-1'>
        <div>© {new Date().getFullYear()} By </div>
        <UnderlineLink href='https://paulmcnamee.com'>
          Paul McNamee
        </UnderlineLink>
      </div>
    </footer>
  );
}
