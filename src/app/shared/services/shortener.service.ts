import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Shortener } from 'src/app/feature-modules/product/shared/models/shortener';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  private _baseUrl = `${environment.serviceUrl}/shortener`;

  constructor(private _http: HttpClient) { }

  share(url: string): Observable<Shortener> {
    return this._http.post<Shortener>(`${this._baseUrl}/create`, { actualUrl: url });
  }

  getUrlByTinyUrl(tinyUrl: string): Observable<Shortener> {
    return this._http.get<Shortener>(`${this._baseUrl}/${tinyUrl}`);
  }
}
