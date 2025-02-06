import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {BrnDialogContentDirective, BrnDialogTriggerDirective} from '@spartan-ng/brain/dialog';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent
} from '@spartan-ng/ui-dialog-helm';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-search-modal',
  imports: [
    BrnDialogContentDirective,
    BrnDialogTriggerDirective,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    RouterLink
  ],
  templateUrl: './search-modal.component.html',
})
export class SearchModalComponent {
  @ViewChild('dialogTrigger', { static: false }) dialogTrigger!: ElementRef<HTMLButtonElement>;


  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.dialogTrigger.nativeElement.click();
    }
  }
}
