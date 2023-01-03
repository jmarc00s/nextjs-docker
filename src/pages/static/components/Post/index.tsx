import React from 'react';
import { Post as PostType } from '../../types';

type PostProps = {
  post: PostType;
};

export const Post = ({ post }: PostProps) => {
  const { content, title } = post;
  return (
    <article className="p-4 rounded shadow-md">
      <p className="mb-4 text-xl font-medium text-center">{title}</p>
      <p className="text-sm text-justify">{content}</p>
    </article>
  );
};
