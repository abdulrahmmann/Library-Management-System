import {Component, input} from '@angular/core';

@Component({
  selector: 'app-dashboard-stats-item',
  imports: [],
  templateUrl: './dashboard-stats-item.component.html',
  styles: ``
})
export class DashboardStatsItemComponent {
  statusName = input.required<string>();
  totalStatus = input.required<number>();
  totalStatusCaret = input.required<number>();
  statusCaret = input.required<"caret-up" | "caret-down">();
}
