import { NextPage } from 'next';
import React from 'react';
import { Post } from '../../components/pages/static/Post';
import { Post as PostType } from '../../types';

export function getStaticProps() {
  const posts: PostType[] = [];

  for (let index = 0; index < 10; index++) {
    posts.push({
      id: index,
      title: `Post ${index}`,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam, doloribus ea officia eos in neque, ut facere quos omnis commodi itaque? Ex labore assumenda nisi dolorum libero non et.',
    });
  }

  return {
    props: {
      posts,
    },
  };
}

type StaticPageProps = {
  posts: PostType[];
};

const StaticPage = ({ posts }: StaticPageProps) => {
  return (
    <>
      <h1 className="pb-4 text-2xl font-semibold">This is a static page</h1>
      <div className="grid grid-cols-4 gap-4">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default StaticPage;
