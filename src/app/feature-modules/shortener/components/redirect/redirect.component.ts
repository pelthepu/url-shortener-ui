import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShortenerService } from 'src/app/shared/services/shortener.service';
import { Shortener } from 'src/app/feature-modules/product/shared/models/shortener';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit, OnDestroy {

  unsubscribeAll: Subject<void> = new Subject();
  unsubscribeAll$ = this.unsubscribeAll.asObservable();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _shortenerService: ShortenerService,
  ) { }

  ngOnInit(): void {
    const tinyUrl = this._activatedRoute.snapshot.paramMap.get('tinyUrl');
    this._shortenerService.getUrlByTinyUrl(tinyUrl)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((data: Shortener) => {
        window.location.href = data.actualUrl;
      })
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
  }

}
