import {Component, Input, OnInit} from '@angular/core';
import {Receipe} from '../receipe.model';
import {ReceipeService} from '../../../../service/receipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  receipe: Receipe;
  id: number;
  constructor(private receipeService: ReceipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.receipe = this.receipeService.getReceipeById(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.receipeService.sendIngredients(this.receipe.ingredients);
  }

  onEditReceipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
