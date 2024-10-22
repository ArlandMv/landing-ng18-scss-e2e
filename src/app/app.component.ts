import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'landing-ng18-scss-e2e';

  ngOnInit(): void {
    initFlowbite();
    //document.documentElement.classList.add('dark');
  }
}
