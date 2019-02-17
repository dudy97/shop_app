import {Receipe} from '../content/receipe_book/receipes/receipe.model';
import {EventEmitter} from '@angular/core';

export class ReceipeService {
  selectedReceipe = new EventEmitter<Receipe>();
  private receipes: Receipe[] = [
    new Receipe('Pierogi', 'Przepis na pierogi', 'https://www.winiary.pl/image.ashx/pierogi-z-kasza-i-grzybami.jpg?fileID=228094&width=800&height=1400&frame=False&bg=0&resize=1&crop=0&hRefill=0&vRefill=0&quality=84'),
    new Receipe('Pizza', 'Przepis na pizze', 'https://www.winiary.pl/image.ashx/pierogi-z-kasza-i-grzybami.jpg?fileID=228094&width=800&height=1400&frame=False&bg=0&resize=1&crop=0&hRefill=0&vRefill=0&quality=84')
  ];

  getReceipes() {
    return this.receipes.slice();
  }
}
