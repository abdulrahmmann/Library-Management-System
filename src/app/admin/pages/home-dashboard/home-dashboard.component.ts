import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {DashboardStatsComponent} from '../../components/dashboard-stats/dashboard-stats.component';

@Component({
  selector: 'app-home-dashboard',
  imports: [
    AdminLayoutComponent,
    DashboardStatsComponent
  ],
  templateUrl: './home-dashboard.component.html',
})
export class HomeDashboardComponent {

}
