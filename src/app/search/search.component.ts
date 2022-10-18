import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  enterSearchText: string = '';
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enterSearchText);
    // console.log(this.enterSearchText);
  }
}
