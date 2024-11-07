import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContadorModule,HeroesModule],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
