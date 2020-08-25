import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const productRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'list',
        component: ProductListComponent,
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'list'
  },
]
