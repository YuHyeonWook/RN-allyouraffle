import axios from 'axios';
import client from './config';

export const getPopularRaffleItems = async () => {
  try {
    return await client.get('/api/v1/raffle/active/popular');
  } catch (error) {
    console.log('인기 래플 데이터 조회 실패', error);
  }
};
