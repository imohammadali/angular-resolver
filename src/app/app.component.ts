import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>App</h1>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {}
}
