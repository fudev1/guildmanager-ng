import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from "./core/navigation/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    ButtonModule,
    NavbarComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'guildmanager-ng';

  newWorldNavItems = [ 
    { path: '/new-world/companies', label: 'Companies' },
    { path: '/new-world/wars', label: 'Wars' },
    { path: '/new-world/servers', label: 'Servers' },
    { path: '/new-world/news', label: 'News' },
    { path: '/new-world/forum', label: 'Forum' }
  ];

  
}
