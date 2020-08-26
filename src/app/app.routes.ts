import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';

export const appRoutes: Routes = [
  {
    path: 'product',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./feature-modules/product/product.module').then((m) => m.ProductModule),
      }
    ]
  },
  {
    path: 's',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./feature-modules/shortener/shortener.module').then((m) => m.ShortenerModule),
      }
    ]
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'product',
    pathMatch: 'full'
  }
]
