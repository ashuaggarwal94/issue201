import { Component, OnInit } from '@angular/core';
import * as singleSpa from "single-spa";
@Component({
  selector: 'ish-cec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ish-cec';
  customerSession;
  constructor() {
    this.customerSession = { name: "ashu" }
  }

  ngOnInit(): void {
    if (!this.customerSession)
      singleSpa.navigateToUrl("home")
  }
}
