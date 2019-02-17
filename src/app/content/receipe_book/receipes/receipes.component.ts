import { Component, OnInit } from '@angular/core';
import {Receipe} from './receipe.model';
import {ReceipeService} from '../../../service/receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [ReceipeService]
})
export class ReceipesComponent implements OnInit {
  tempReceipe: Receipe;

  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {
    this.receipeService.selectedReceipe.subscribe(
      (receipe: Receipe) => this.tempReceipe = receipe
    );
  }

}
