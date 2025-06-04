import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Post ID: {postId}</p>
    </div>
  );
};

export default PostDetailPage;
