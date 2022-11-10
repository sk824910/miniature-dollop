import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-api-fetch',
  templateUrl: './api-fetch.component.html',
  styleUrls: ['./api-fetch.component.css'],
})
export class ApiFetchComponent implements OnInit {
  data: any
  constructor(private ApiService: ApiService) {
    this.ApiService.fetch().subscribe(data => {
      this.data = data;
  });
  }

  ngOnInit(): void {}

  log(): void {
    console.log(this.data)
  }
  /** GET heroes from the server */
  
}
