import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Receipe} from '../receipe.model';
import {ReceipeService} from '../../../../service/receipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input()receipe: Receipe;
  @Input() index: number;

  constructor(private receipeService: ReceipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
