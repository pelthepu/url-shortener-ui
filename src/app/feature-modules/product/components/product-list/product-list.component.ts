import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';
import { Observable } from 'rxjs';
import { ShortenerService } from 'src/app/shared/services/shortener.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';
import { Logger } from 'src/app/core/services/logger.service';
import { Shortener } from '../../shared/models/shortener';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'category', 'vendor', 'price', 'actions'];
  products$: Observable<Product[]> = this._productService.getProductList();
  log: Logger;

  constructor(
    private _productService: ProductService,
    private _shortenerService: ShortenerService,
    private _dialog: MatDialog,
  ) {
    this.log = new Logger('ProductListComponent');
  }

  ngOnInit() {
  }

  shareProduct(product: Product): void {
    const url = `${location.origin}/product/detail/${product.id}`
    this._shortenerService.share(url).subscribe((data: Shortener) => {
      this._displayInfo(data);
    }, (err) => {
      this.log.error('Error in sharing product', err);
    });
  }

  private _displayInfo(data: Shortener) {
    const tinyUrl = `${location.origin}/s/${data.tinyUrl}`;
    this._dialog.open(AlertDialogComponent, {
      data: {
        message: `Product has been shared with tiny URL: <a href='${tinyUrl}'>${tinyUrl}</a>`,
      }
    });
  }

}
