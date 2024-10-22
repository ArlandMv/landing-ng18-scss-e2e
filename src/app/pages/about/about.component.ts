import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styles: [
    `
      h1 {
        color: #ff9800;
        text-align: center;
        margin-top: 2rem;
      }
    `,
  ],
})
export class AboutComponent {}
