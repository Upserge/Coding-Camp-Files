import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})

export class Child {

  number = input<number>(0);
  childNamePassedFromParent = input<string>("");
}
