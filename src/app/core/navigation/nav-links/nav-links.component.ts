import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {
  @Input() isMobile: boolean = false;

  links2 = [
    { path: '/', label: 'Home' },
    { path: '/new-world', label: 'New World' },
    { path: '/thrones-liberty', label: 'Thrones' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  newWorldNavItems2 = [ 
    { path: '/new-world/companies', label: 'Companies' },
    { path: '/new-world/wars', label: 'Wars' },
    { path: '/new-world/servers', label: 'Servers' },
    { path: '/new-world/news', label: 'News' },
    { path: '/new-world/forum', label: 'Forum' }
  ];
}
