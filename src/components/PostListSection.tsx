import React from 'react';

interface DummyPost {
  id: number;
  title: string;
  excerpt: string;
}

const dummyPosts: DummyPost[] = [
  { id: 1, title: '첫 번째 포스트', excerpt: '이것은 첫 번째 포스트의 요약입니다.' },
  { id: 2, title: '두 번째 포스트', excerpt: '이것은 두 번째 포스트의 요약입니다.' },
  { id: 3, title: '세 번째 포스트', excerpt: '이것은 세 번째 포스트의 요약입니다.' },
];

const PostListSection: React.FC = () => {
  return (
    <section className="flex-1 p-4">
      <h2 className="text-2xl font-semibold mb-4">최신 포스트</h2>
      <ul>
        {dummyPosts.map((post) => (
          <li key={post.id} className="mb-6 border-b pb-4">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostListSection;
