import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input('total') all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;
  selectedRadioButtonValue: string = 'All';
  @Output()
  filterRadiaButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  onRadioButtonSelectionChanged() {
    this.filterRadiaButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue);
  }
}
