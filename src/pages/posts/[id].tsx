import * as React from 'react';

import Date from '@/components/date';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import type { Post } from '../../lib/posts';
import { getAllPostIds, getPostData } from '../../lib/posts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

interface PostComponentProps {
  postData: Post;
}

export default function Post({ postData }: PostComponentProps) {
  return (
    <Layout>
      <Seo templateTitle={postData.title} />
      <div className='layout relative flex flex-col py-2'>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date ?? 0} />
        </div>
        <div>
          <hr></hr>
          <br></br>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml ?? '' }} />
      </div>
    </Layout>
  );
}
