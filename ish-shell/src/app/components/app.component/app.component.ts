import { Component, OnInit } from '@angular/core';
import { APPS } from '../../../assets/config/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('apps', JSON.stringify(APPS));
  }
}
