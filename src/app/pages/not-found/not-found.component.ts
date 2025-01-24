import { Component } from '@angular/core';
import {MainLayoutComponent} from '../../components/main-layout/main-layout.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [
    MainLayoutComponent,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

}
