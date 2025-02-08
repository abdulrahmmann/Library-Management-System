import { Component } from '@angular/core';
import {SidebarComponent} from '../../../components/sidebar/sidebar.component';
import {SidebarDrawerComponent} from '../../../components/sidebar-drawer/sidebar-drawer.component';

@Component({
  selector: 'app-admin-layout',
  imports: [
    SidebarComponent,
    SidebarDrawerComponent,
  ],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {

}
