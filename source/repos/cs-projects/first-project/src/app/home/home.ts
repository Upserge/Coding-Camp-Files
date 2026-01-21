import { Component } from '@angular/core';
import { Child } from '../child/child'; 

@Component({
  selector: 'app-home',
  imports: [Child],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public myName = "Persons NameHere";
  
}
