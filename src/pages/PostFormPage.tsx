import React from 'react';
import { useParams } from 'react-router-dom';

const PostFormPage: React.FC = () => {
  const { postId } = useParams<{ postId?: string }>();
  return (
    <div>
      <h1>{postId ? 'Edit Post' : 'Create New Post'}</h1>
      <p>{postId ? `Editing ID: ${postId}` : '작성 모드'}</p>
    </div>
  );
};

export default PostFormPage;
