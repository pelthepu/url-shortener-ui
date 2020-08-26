import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productInfo$: Observable<Product>;

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const productId = +this._activatedRoute.snapshot.paramMap.get('id');
    this.productInfo$ = this._productService.getProductById(productId);
  }

}
