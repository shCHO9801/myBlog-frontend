import React from 'react';

const dummyCategories = ['전체', '자바스크립트', '리액트', '백엔드', '데브옵스'];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4 border-r p-4">
      <h2 className="font-semibold mb-2">카테고리</h2>
      <ul>
        {dummyCategories.map((cat) => (
          <li key={cat} className="mb-1 hover:underline cursor-pointer">
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
