import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

function printString(message: string) {
  console.log(message);
}

/**
 * Anything can be set on a js object ({})
 * Callable objects
 * Classes are just a js object nut
 * Decorators are functions that take object/function nuts and transform them
 */