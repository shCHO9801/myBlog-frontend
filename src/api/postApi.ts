// src/api/postApi.ts
import axios from 'axios';

export interface PostSummary {
  postId: number;
  title: string;
  thumbnailUrl: string | null;
  userNickname: string;
  createdAt: string;
}

// 실제 API 응답 구조에 맞춘 타입
interface PaginationDto {
  currentPage: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

interface GetPostsResponse {
  data: PostSummary[];
  paginationDto: PaginationDto;
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // 백엔드 주소 확인
  headers: { 'Content-Type': 'application/json' },
});

export const getPosts = async (): Promise<PostSummary[]> => {
  try {
    const response = await axiosInstance.get<GetPostsResponse>('/post');
    return response.data.data; // 이전의 content 대신 data 필드 사용
  } catch (error) {
    console.error('[getPosts] Error:', error);
    throw error;
  }
};
