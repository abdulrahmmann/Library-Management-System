
export interface AllUsersModel {
  id: number;
  name: string;
  email: string;
  profilePic?: string;
  dateJoined: string;
  role: 'Admin' | 'user';
  booksBorrowed: string;
  universityId: number;
}
