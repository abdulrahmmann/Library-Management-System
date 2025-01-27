import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {DashboardStatsComponent} from '../../components/dashboard-stats/dashboard-stats.component';
import {RecentlyAddedBooksComponent} from '../../components/recently-added-books/recently-added-books.component';
import {BorrowRequestsComponent} from '../../components/borrow-requests/borrow-requests.component';
import {AccountRequestsComponent} from '../../components/account-requests/account-requests.component';

@Component({
  selector: 'app-home-dashboard',
  imports: [
    AdminLayoutComponent,
    DashboardStatsComponent,
    RecentlyAddedBooksComponent,
    BorrowRequestsComponent,
    AccountRequestsComponent
  ],
  templateUrl: './home-dashboard.component.html',
})
export class HomeDashboardComponent {

}
