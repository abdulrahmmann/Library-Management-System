
export interface AllUsersModel {
  id: number;
  name: string;
  email: string;
  profilePic?: string;
  dateJoined: string;
  role: 'Admin' | 'User';
  booksBorrowed: string;
  universityId: number;
}
