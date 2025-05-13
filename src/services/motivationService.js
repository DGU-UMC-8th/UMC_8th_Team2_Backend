// src/services/motivationService.js
import { generateMotivation } from '../utils/geminiClient.js';

export const createMotivation = async (userInfo) => {
  return await generateMotivation(userInfo);
};
