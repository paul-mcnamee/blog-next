import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import type { Post } from '../../lib/posts';
import { getAllPostIds, getPostData } from '../../lib/posts';

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

interface CodeComponent {
  node: any;
  inline: any;
  className: any;
  children: any;
}

export default function Post({ postData }: PostComponentProps) {
  const syntaxTheme = oneDark;
  const markdown = postData.content ?? '';
  const MarkdownComponents: object = {
    // eslint-disable-next-line unused-imports/no-unused-vars
    code({ node, inline, className, children, ...props }: CodeComponent) {
      const hasLang = /language-(\w+)/.exec(className || '');
      const hasMeta = node?.data?.meta;
      props;
      return hasLang ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={hasLang[1]}
          PreTag='div'
          className='codeStyle'
          showLineNumbers={true}
          wrapLines={hasMeta}
          useInlineStyles={true}
        >
          {children}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  SyntaxHighlighter.registerLanguage('tsx', tsx);
  SyntaxHighlighter.registerLanguage('typescript', typescript);
  SyntaxHighlighter.registerLanguage('scss', scss);
  SyntaxHighlighter.registerLanguage('bash', bash);
  SyntaxHighlighter.registerLanguage('json', json);
  SyntaxHighlighter.registerLanguage('csharp', csharp);
  SyntaxHighlighter.registerLanguage('c#', csharp);
  SyntaxHighlighter.registerLanguage('C#', csharp);
  SyntaxHighlighter.registerLanguage('cs', csharp);

  return (
    <Layout>
      <Seo templateTitle={postData.id} />
      <div className='layout relative flex flex-col py-2'>
        <ReactMarkdown components={MarkdownComponents}>
          {markdown}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}
