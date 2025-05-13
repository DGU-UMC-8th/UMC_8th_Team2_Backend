import { createMotivation } from '../services/motivationService';

export const generateMotivationController = async (req, res) => {
  try {

    const userInfo = req.body;
    const motivation = await createMotivation(userInfo);

    return res.status(200).json({
      success: true,
      motivation,
    });
  } catch (err) {
    console.error('❌ 지원동기 생성 실패:', err);
    return res.status(500).json({
      success: false,
      message: '지원동기 생성 중 오류가 발생했습니다.',
    });
  }
};
