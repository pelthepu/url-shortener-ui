import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectComponent } from './components/redirect/redirect.component';
import { RouterModule } from '@angular/router';
import { shortenerRoutes } from './shortener.routes';

@NgModule({
  declarations: [RedirectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shortenerRoutes)
  ]
})
export class ShortenerModule { }
