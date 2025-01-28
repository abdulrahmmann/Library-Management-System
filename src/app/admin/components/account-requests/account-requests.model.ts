
export interface AccountRequestsModel {
  id: number;
  accountName: string;
  accountEmail: string;
  accountType: 'user' | 'admin';
  accountImage?: string;
}
