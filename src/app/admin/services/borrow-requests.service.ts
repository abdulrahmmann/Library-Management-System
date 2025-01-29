import {Injectable} from '@angular/core';
import {BarrowRequestsModel} from '../models/barrow-requests.model';

@Injectable({
  providedIn: 'root'
})
export class BorrowRequestsService {
  private borrowedRequests: BarrowRequestsModel[] = [
    {
      id: 1,
      bookName: 'Inside Evil: Inside Evil Series, Book 1',
      author: 'Rachel Heng',
      poster: '/book-all-con.png',
      genre: ['Strategic', 'Fantasy'],
      dateBorrowed: '12/01/24',
      userBorrowedName: 'Darrell Stewards',
      userBorrowedImg: '/user.png'
    },
    {
      id: 2,
      bookName: 'Jayne Castle - People in Glass Houses',
      author: 'Rachel Heng',
      poster: '/book-all-con2.png',
      genre: ['Strategic', 'Fantasy'],
      dateBorrowed: '12/01/24',
      userBorrowedName: 'Darrell Stewards',
      userBorrowedImg: '/user.png'
    },
    {
      id: 3,
      bookName: 'Inside Evil: Inside Evil Series, Book 1',
      author: 'Rachel Heng',
      poster: '/book-all-con3.png',
      genre: ['Strategic', 'Fantasy'],
      dateBorrowed: '12/01/24',
      userBorrowedName: 'Darrell Stewards',
      userBorrowedImg: '/user.png'
    },
  ];

  // get all borrowed requests
  get borrowedRequestsBooks(): BarrowRequestsModel[] {
    return this.borrowedRequests;
  }
}
