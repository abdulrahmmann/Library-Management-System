
export interface BorrowRequestsModel {
  id: number;
  bookName: string;
  bookImage: string;
  userName: string;
  userEmail: string;
  userImage?:string;
  borrowedStatus: "Borrowed" | "Returned" | "Late Return";
  borrowedDate: string;
  returnDate: string;
  dueDate: string;
}
