import {Injectable} from '@angular/core';
import {RecentlyAddedBooksModel} from '../models/recently-added-books.model';

@Injectable({
  providedIn: 'root'
})
export class RecentlyAddedBooksService {
  private recentlyAddedBooks: RecentlyAddedBooksModel[] = [
    {
      id: 1,
      bookName: 'Inside Evil: Inside Evil Series, Book 1',
      author: 'Rachel Heng',
      poster: '/book-all-con.png',
      genre: ['Strategic', 'Fantasy'],
      dateBorrowed: '12/01/24',
    },
    {
      id: 2,
      bookName: 'Jayne Castle - People in Glass Houses',
      author: 'Rachel Heng',
      poster: '/book-all-con2.png',
      genre: ['Strategic', 'Fantasy'],
      dateBorrowed: '12/01/24',
    },
    {
      id: 3,
      bookName: 'Inside Evil: Inside Evil Series, Book 1',
      author: 'Rachel Heng',
      poster: '/book-all-con3.png',
      genre: ['Strategic', 'Fantasy'],
      dateBorrowed: '12/01/24',
    },
    {
      id: 4,
      bookName: 'Inside Evil: Inside Evil Series, Book 1',
      author: 'Rachel Heng',
      poster: '/book-all-con.png',
      genre: ['Strategic', 'Fantasy'],
      dateBorrowed: '12/01/24',
    },
    {
      id: 5,
      bookName: 'Jayne Castle - People in Glass Houses',
      author: 'Rachel Heng',
      poster: '/book-all-con2.png',
      genre: ['Strategic', 'Fantasy'],
      dateBorrowed: '12/01/24',
    },
    {
      id: 6,
      bookName: 'Inside Evil: Inside Evil Series, Book 1',
      author: 'Rachel Heng',
      poster: '/book-all-con3.png',
      genre: ['Strategic', 'Fantasy'],
      dateBorrowed: '12/01/24',
    },
  ];

  get getRecentlyAddedBooks(): RecentlyAddedBooksModel[] {
    return this.recentlyAddedBooks;
  }

  addNewBooks(newBooksModel: RecentlyAddedBooksModel): void {
    this.recentlyAddedBooks.push(newBooksModel);
  }

}
