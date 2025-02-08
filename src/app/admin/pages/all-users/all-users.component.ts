import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AllUsersService} from '../../services/all-users.service';
import {NgOptimizedImage} from '@angular/common';
import {ProfilePicService} from '../../services/profile-pic.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {AllUsersModel} from '../../models/all-users.model';
import {Dialog} from 'primeng/dialog';


@Component({
  selector: 'app-all-users',
  imports: [
    AdminLayoutComponent,
    NgOptimizedImage,
    TableModule,
    CommonModule,
    Dialog,
  ],
  templateUrl: './all-users.component.html',
})
export class AllUsersComponent {
  private _allUsersService = inject(AllUsersService);

  protected allUsers: AllUsersModel[] = this._allUsersService.getAllUsers;

  protected profilePicService = inject(ProfilePicService);


  isAscending: boolean = true;

  toggleSort() {
    this.isAscending = !this.isAscending;
    this.allUsers.sort((a, b) =>
      this.isAscending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }

  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

}
