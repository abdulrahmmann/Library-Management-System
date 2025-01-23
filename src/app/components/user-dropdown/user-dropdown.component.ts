import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user-dropdown',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './user-dropdown.component.html',
  styleUrl: './user-dropdown.component.css'
})
export class UserDropdownComponent {
  isDropdownVisible = signal<boolean>(false);

  onToggleDropDown() {
    this.isDropdownVisible.update(() => !this.isDropdownVisible())
  }
}
