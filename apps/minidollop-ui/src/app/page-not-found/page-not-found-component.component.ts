import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  ngOnInit() {
    console.log('page not found!');
  }
}
