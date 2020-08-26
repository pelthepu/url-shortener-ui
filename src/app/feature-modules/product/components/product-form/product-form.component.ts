import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { appConstants } from 'src/app/config/app.constants';
import { notOnlyWhiteSpaceValidator } from 'src/app/shared/validators/no-whitesapce.validator';
import { Logger } from 'src/app/core/services/logger.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  appConstants = appConstants;

  form: FormGroup;
  submittingForm: boolean = false;
  log: Logger;

  constructor(
    private _productService: ProductService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _toastrService: ToastrService
  ) {
    this.log = new Logger('ProductFormComponent');
  }

  ngOnInit() {
    this.form = this._buildForm();
  }

  private _buildForm(): FormGroup {
    return this._formBuilder.group({
      title: [null, notOnlyWhiteSpaceValidator],
      category: [null, notOnlyWhiteSpaceValidator],
      vendor: [null, notOnlyWhiteSpaceValidator],
      price: [null, Validators.required],
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this._productService.addProduct(this.form.value).subscribe((data) => {
      this._toastrService.show('Successfully added');
      this._router.navigateByUrl('product/list');
    }, (err) => {
      this.log.error('Error in adding product', err);
      this._toastrService.show('Error in adding product');
    });
  }

}
