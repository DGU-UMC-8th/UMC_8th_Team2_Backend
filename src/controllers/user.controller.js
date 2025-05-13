import UserService from '../services/user.service.js';

export const getUserProfile = async (req, res) => {
  try {
    const profile = await UserService.getUserProfileWithDetails();
    res.json({ data: profile });
  } catch (err) {
    res.status(500).json({ message: '서버 오류', error: err.message });
  }
};