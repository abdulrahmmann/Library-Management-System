import { Component } from '@angular/core';
import {SidebarComponent} from '../../../components/sidebar/sidebar.component';
import {SearchModalComponent} from '../search-modal/search-modal.component';
import {SidebarSheetComponent} from '../../../components/sidebar-sheet/sidebar-sheet.component';

@Component({
  selector: 'app-admin-layout',
  imports: [
    SidebarComponent,
    SearchModalComponent,
    SidebarSheetComponent,
  ],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {

}
