import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Receipe} from '../receipe.model';
import {ReceipeService} from '../../../../service/receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [];

  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {
    this.receipes = this.receipeService.getReceipes();
  }

}
