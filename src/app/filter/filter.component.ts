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

// The @Output is used: after define @Output then create EventEmitter
// This event is used to emit data from child component to parent component
// Create expressions to handle an event as (change), (click) from user action
// In parent component: Using EventEmitter as an normal event ().
// Create expressions on parent to get data from child component with parametter input is $event
// And then we can using this input value for any task we want
