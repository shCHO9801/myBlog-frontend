import React from 'react';

const Header: React.FC = () => {
    return (
      <header className="border-b py-4 px-6">
        <h1 className="text-xl font-bold">My Blog</h1>
        {/* 나중에 네비게이션 메뉴 추가 예정 */}
      </header>
    );
  };

export default Header;