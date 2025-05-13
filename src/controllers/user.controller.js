import UserService from '../services/user.service.js';

/**
 * @swagger
 * /api/v1/user/profile:
 *   get:
 *     summary: 사용자 프로필 조회
 *     description: 단일 사용자(name, age, gender) 정보를 반환합니다.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: 사용자 정보 반환 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: 홍길동
 *                     age:
 *                       type: number
 *                       example: 78
 *                     gender:
 *                       type: string
 *                       example: M
 *       500:
 *         description: 서버 오류
 */
export const getUserProfile = async (req, res) => {
  try {
    const profile = await UserService.getUserProfileWithDetails();
    // 필요한 필드만 추출
    const { name, age, gender } = profile;
    res.json({ data: { name, age, gender } });
  } catch (err) {
    res.status(500).json({ message: '서버 오류', error: err.message });
  }
};