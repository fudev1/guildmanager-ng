import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { providePrimeNG } from 'primeng/config';
import PrimeGm from './themes/theme-gm';
// import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({ 
      ripple: true,
      theme: {
        preset: PrimeGm,
        options: {
          cssLayer: {
              name: 'primeng',
              order: 'tailwind-base, primeng, tailwind-utilities'
          }
        }
      }
    })
  ]
};
