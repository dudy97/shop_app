import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() valueSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNavClick(selected: string) {
    this.valueSelected.emit(selected);
  }
}
