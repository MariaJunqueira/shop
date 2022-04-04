import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {

  @Input() sort: string;
  @Output() sortChange = new EventEmitter<string>();

  onSortChange() {
    this.sortChange.emit(this.sort);
  }
}
