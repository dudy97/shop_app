import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Receipe} from '../receipe.model';
import {ReceipeService} from '../../../../service/receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe: Receipe;

  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {
  }

  onItemClicked() {
    this.receipeService.selectedReceipe.emit(this.receipe);
  }
}
