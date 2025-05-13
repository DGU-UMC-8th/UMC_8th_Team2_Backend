class UserProfileDTO {
  constructor(user, jobs, documents) {
    this.name = user.name;
    this.age = user.age;
    this.gender = user.gender;
  }
}

export default UserProfileDTO;