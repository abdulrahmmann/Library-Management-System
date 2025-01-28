import {Injectable} from '@angular/core';
import {BooksModel} from './all-books.model';

@Injectable({
  providedIn: "root"
})
export class AllBooksService {
  private _allBooks: BooksModel[] = [
    {
      id: 1,
      title: "The Great Reclamation: A Novel by",
      bookPoster: "book-all-con.png",
      author: "Harper Lee",
      genre: ["Fiction", "Classic"],
      dateCreated: "2025-01-01",
    },
    {
      id: 2,
      title: "Inside Evil: Inside Evil Series, Book 1",
      bookPoster: "book-all-con2.png",
      author: "George Orwell",
      genre: ["Dystopian", "Science Fiction"],
      dateCreated: "2025-01-02",
    },
    {
      id: 3,
      title: "Jayne Castle - People in Glass Houses",
      bookPoster: "book-all-con3.png",
      author: "F. Scott Fitzgerald",
      genre: ["Fiction", "Classic"],
      dateCreated: "2025-01-03",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      bookPoster: "book-all-con.png",
      author: "Jane Austen",
      genre: ["Romance", "Classic"],
      dateCreated: "2025-01-04",
    },
    {
      id: 5,
      title: "The Great Reclamation: A Novel by",
      bookPoster: "book-all-con2.png",
      author: "J.R.R. Tolkien",
      genre: ["Fantasy", "Adventure"],
      dateCreated: "2025-01-05",
    },
    {
      id: 6,
      title: "The Great Reclamation: A Novel by",
      bookPoster: "book-all-con3.png",
      author: "Herman Melville",
      genre: ["Adventure", "Classic"],
      dateCreated: "2025-01-06",
    },
    {
      id: 7,
      title: "War and Peace",
      bookPoster: "book-all-con.png",
      author: "Leo Tolstoy",
      genre: ["Historical Fiction", "Classic"],
      dateCreated: "2025-01-07",
    },
    {
      id: 8,
      title: "The Catcher in the Rye",
      bookPoster: "book-all-con2.png",
      author: "J.D. Salinger",
      genre: ["Fiction", "Classic"],
      dateCreated: "2025-01-08",
    },
    {
      id: 9,
      title: "Pride and Prejudice",
      bookPoster: "book-all-con2.png",
      author: "Paulo Coelho",
      genre: ["Fiction", "Philosophical"],
      dateCreated: "2025-01-09",
    },
    {
      id: 10,
      title: "Brave New World",
      bookPoster: "book-all-con3.png",
      author: "Aldous Huxley",
      genre: ["Dystopian", "Science Fiction"],
      dateCreated: "2025-01-10",
    },
  ];

  get getAllBooks(): BooksModel[] {
    return this._allBooks;
  }

  createBook(book: BooksModel): void {
    this._allBooks.push(book);
  }
}
