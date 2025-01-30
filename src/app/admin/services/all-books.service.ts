import {Injectable} from '@angular/core';
import {BooksModel} from '../models/all-books.model';

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
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
    {
      id: 2,
      title: "Inside Evil: Inside Evil Series, Book 1",
      bookPoster: "book-all-con2.png",
      author: "George Orwell",
      genre: ["Dystopian", "Science Fiction"],
      dateCreated: "2025-01-02",
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
    {
      id: 3,
      title: "Jayne Castle - People in Glass Houses",
      bookPoster: "book-all-con3.png",
      author: "F. Scott Fitzgerald",
      genre: ["Fiction", "Classic"],
      dateCreated: "2025-01-03",
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      bookPoster: "book-all-con.png",
      author: "Jane Austen",
      genre: ["Romance", "Classic"],
      dateCreated: "2025-01-04",
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
    {
      id: 5,
      title: "The Great Reclamation: A Novel by",
      bookPoster: "book-all-con2.png",
      author: "J.R.R. Tolkien",
      genre: ["Fantasy", "Adventure"],
      dateCreated: "2025-01-05",
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
    {
      id: 6,
      title: "The Great Reclamation: A Novel by",
      bookPoster: "book-all-con3.png",
      author: "Herman Melville",
      genre: ["Adventure", "Classic"],
      dateCreated: "2025-01-06",
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
    {
      id: 7,
      title: "War and Peace",
      bookPoster: "book-all-con.png",
      author: "Leo Tolstoy",
      genre: ["Historical Fiction", "Classic"],
      dateCreated: "2025-01-07",
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
    {
      id: 8,
      title: "The Catcher in the Rye",
      bookPoster: "book-all-con2.png",
      author: "J.D. Salinger",
      genre: ["Fiction", "Classic"],
      dateCreated: "2025-01-08",
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
    {
      id: 9,
      title: "Pride and Prejudice",
      bookPoster: "book-all-con2.png",
      author: "Paulo Coelho",
      genre: ["Fiction", "Philosophical"],
      dateCreated: "2025-01-09",
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
    {
      id: 10,
      title: "Brave New World",
      bookPoster: "book-all-con3.png",
      author: "Aldous Huxley",
      genre: ["Dystopian", "Science Fiction"],
      dateCreated: "2025-01-10",
      summery: "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, \"People in Glass Houses,\" symbolizes the fragile nature of the world the characters inhabit and the vun erabilities they face in their personal and professional lives.",
      bookVideo: "/video-img.png"
    },
  ];

  get getAllBooks(): BooksModel[] {
    return this._allBooks;
  }

  createBook(book: BooksModel): void {
    this._allBooks.push(book);
  }
}
