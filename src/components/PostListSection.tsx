import React, { useEffect, useState } from 'react';
import { getPosts, type PostSummary } from '../api/postApi';

const PostListSection: React.FC = () => {
  const [posts, setPosts] = useState<PostSummary[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError('포스트 목록을 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="flex-1 p-4">
        <p>로딩 중...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex-1 p-4">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <section className="flex-1 p-4">
        <p>등록된 포스트가 없습니다.</p>
      </section>
    );
  }

  return (
    <section className="flex-1 p-4">
      <h2 className="text-2xl font-semibold mb-4">최신 포스트</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.postId} className="mb-6 border-b pb-4 flex">
            {post.thumbnailUrl && (
              <img
                src={post.thumbnailUrl}
                alt={post.title}
                className="w-24 h-16 object-cover mr-4 rounded"
              />
            )}
            <div>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-600 text-sm">
                작성자: {post.userNickname} ·{' '}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostListSection;
