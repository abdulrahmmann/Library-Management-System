import {Injectable} from '@angular/core';
import {AllUsersModel} from './all-users.model';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {
  private _allUsers: AllUsersModel[] = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      profilePic: "/user.png",
      dateJoined: "2023-02-15",
      role: "Admin",
      booksBorrowed: "5",
      universityId: 90324423789
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      profilePic: "/user4.png",
      dateJoined: "2023-03-10",
      role: "user",
      booksBorrowed: "2",
      universityId: 90024423789
    },
    {
      id: 3,
      name: "Clara Adams",
      email: "clara.adams@example.com",
      dateJoined: "2023-01-25",
      role: "user",
      booksBorrowed: "7",
      universityId: 90324423789
    },
    {
      id: 4,
      name: "Daniel Baker",
      email: "daniel.baker@example.com",
      profilePic: "/user4.png",
      dateJoined: "2022-11-20",
      role: "Admin",
      booksBorrowed: "10",
      universityId: 90324423789
    },
    {
      id: 5,
      name: "Eva Green",
      email: "eva.green@example.com",
      profilePic: "/user3.png",
      dateJoined: "2023-05-18",
      role: "user",
      booksBorrowed: "4",
      universityId: 90324423789
    },
    {
      id: 6,
      name: "Frank Thomas",
      email: "frank.thomas@example.com",
      dateJoined: "2023-06-22",
      role: "user",
      booksBorrowed: "3",
      universityId: 90324423789
    },
    {
      id: 7,
      name: "Grace Lee",
      email: "grace.lee@example.com",
      profilePic: "/user3.png",
      dateJoined: "2023-07-05",
      role: "Admin",
      booksBorrowed: "12",
      universityId: 90324423789
    },
    {
      id: 8,
      name: "Henry Wilson",
      email: "henry.wilson@example.com",
      dateJoined: "2023-04-01",
      role: "user",
      booksBorrowed: "1",
      universityId: 90324423789
    },
    {
      id: 9,
      name: "Isabella Moore",
      email: "isabella.moore@example.com",
      profilePic: "/user2.png",
      dateJoined: "2023-08-12",
      role: "user",
      booksBorrowed: "6",
      universityId: 90324423789
    },
    {
      id: 10,
      name: "Jack White",
      email: "jack.white@example.com",
      profilePic: "/user.png",
      dateJoined: "2023-09-09",
      role: "Admin",
      booksBorrowed: "8",
      universityId: 90324423789
    }
  ];

  get getAllUsers(): AllUsersModel[] {
    return this._allUsers;
  }

}
