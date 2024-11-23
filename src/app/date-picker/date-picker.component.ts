import { Component, OnInit } from '@angular/core';
import { DateRangeService } from '../services/date-range-service.service';

@Component({
  standalone: false,
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  minDate: Date | null = null;
  maxDate: Date | null = null;

  constructor(private dateRangeService: DateRangeService) {}

  ngOnInit(): void {
    this.dateRangeService.getDateRange().subscribe({
      next: (dates: any) => {
        this.minDate = new Date(dates.minDate);
        this.maxDate = new Date(dates.maxDate);
      },
      error: (err: any) => console.error('Error fetching date range', err),
    });
  }
}

