import UserRepository from '../repositories/user.repository.js';
import UserProfileDTO from '../dtos/user.dto.js';

class UserService {
  async getUserProfileWithDetails() {
    const user = await UserRepository.getSingleUser();
    if (!user) throw new Error('유저가 존재하지 않습니다.');

    return new UserProfileDTO(user);
  }
}

export default new UserService();