import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AllUsersService} from './all-users.service';
import {DatePipe} from '@angular/common';
import {ProfilePicService} from '../../services/profile-pic.service';


@Component({
  selector: 'app-all-users',
  imports: [
    AdminLayoutComponent,
    DatePipe,
  ],
  templateUrl: './all-users.component.html',
})
export class AllUsersComponent {
  private _allUsersService = inject(AllUsersService);

  protected allUsers = this._allUsersService.getAllUsers;

  protected profilePicService = inject(ProfilePicService);

}
