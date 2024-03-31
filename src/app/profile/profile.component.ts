import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  @Output()
  selected = new EventEmitter<string>();

  selectedBtn: string = 'weekly';

  btns = ['daily', 'weekly', 'monthly'];

  changeTimeFrame(btn: string) {
    this.selectedBtn = btn;
    this.selected.emit(this.selectedBtn);
  }
  btnActiveClass(btn: string): string | null{
    if (btn === this.selectedBtn) {
      return 'text-white';
    }
    return null;
  }
}
