import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    appConfig.providers,
    provideAnimations(),
    provideHttpClient(),
    provideAnimations(),
  ],
}).catch(err => console.error(err));
