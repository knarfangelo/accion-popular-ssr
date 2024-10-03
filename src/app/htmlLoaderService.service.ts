import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HtmlLoaderServiceService {

  constructor(private http: HttpClient) {}

  loadHtml(contentUrl: string): Observable<string> {
    return this.http.get(contentUrl, { responseType: 'text' });
  }

}
