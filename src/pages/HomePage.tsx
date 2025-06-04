import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PostListSection from '../components/PostListSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 메인 컨텐츠 영역 */}
      <div className="flex flex-1">
        <Sidebar />
        <PostListSection />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
