// src/utils/geminiClient.js
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateMotivation = async (userInfo) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `
  아래 정보를 참고해서 IT 기업 지원동기를 300자 내외로 작성해줘. 자연스럽고 간결하게 써줘.

  이름: ${userInfo.name}
  나이: ${userInfo.age}
  성별: ${userInfo.gender}
  직무: ${userInfo.job}
  특징: ${userInfo.characteristics || '성실하고 문제해결을 좋아함'}

  예시: 'IT에 대한 꾸준한 관심과 학습으로 지원하게 되었습니다...'
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};
