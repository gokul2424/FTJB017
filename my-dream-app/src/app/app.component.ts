import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular using CLI';

  courses : Array<object> = [
    {caption: 'Angular',  votes: 23},
    {caption: 'React',  votes: 33},
    {caption: 'Ember',  votes: 3},
  ]
}
