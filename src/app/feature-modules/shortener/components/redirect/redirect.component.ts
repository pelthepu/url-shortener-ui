import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/feature-modules/product/shared/services/product.service';
import { ShortenerService } from 'src/app/shared/services/shortener.service';
import { Shortener } from 'src/app/feature-modules/product/shared/models/shortener';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _shortenerService: ShortenerService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const tinyUrl = this._activatedRoute.snapshot.paramMap.get('tinyUrl');
    this._shortenerService.getUrlByTinyUrl(tinyUrl).subscribe((data: Shortener) => {
      window.location.href = data.actualUrl;
    })
  }

}
