import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  localUrl = 'http://localhost:3000/api/sites/6329309b0927978bc21bc8ca';
  data: any;
  constructor(private http: HttpClient) {}

  fetch(): Observable<any> {
    const res = this.http.get<any>(this.localUrl, {
    });
    this.data = res;
    return res;
  }
}
