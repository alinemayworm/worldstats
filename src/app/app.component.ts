import { Component } from '@angular/core';
import { fadeIn } from './shared/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn()],
})
export class AppComponent {
  title: string = 'worldstats-app';
  animateText = false;
  startTextAnimation(): void {
    console.log('startTextAnimation');
    this.animateText = true;
  }
}
