import { Routes } from '@angular/router';
import { RedirectComponent } from './components/redirect/redirect.component';

export const shortenerRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':tinyUrl',
        component: RedirectComponent,
      },
    ]
  },
]
