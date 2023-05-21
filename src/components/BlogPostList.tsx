import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';

import Date from './date';
import type { Post } from '../lib/posts';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData: Post[] = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogPostList(allPostsData: Post[]) {
  return (
    <div>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date ?? 0}></Date>
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
