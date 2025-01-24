import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {UserDropdownComponent} from '../user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    UserDropdownComponent
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
