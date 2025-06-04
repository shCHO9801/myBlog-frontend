import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// 페이지 컴포넌트 import
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import PostFormPage from './pages/PostFormPage';
import MyPage from './pages/MyPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 루트는 Home으로 리디렉트 */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Post 관련 */}
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/new" element={<PostFormPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
        <Route path="/posts/:postId/edit" element={<PostFormPage />} />

        {/* 마이페이지 */}
        <Route path="/mypage" element={<MyPage />} />

        {/* 그 밖에 매칭되는 경로 없으면 404용 컴포넌트(나중에 구현) */}
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
