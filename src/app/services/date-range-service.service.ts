import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateRangeService {
  private apiUrl = 'http://localhost:5002/api/Booking/available-dates'; // Замініть на ваш URL

  constructor(private http: HttpClient) {}

  getDateRange(): Observable<{ minDate: string, maxDate: string }> {
    return this.http.get<{ minDate: string, maxDate: string }>(this.apiUrl);
  }
}
