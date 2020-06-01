import { Component, OnInit } from '@angular/core';
import * as singleSpa from 'single-spa';

/**Custom Imported Providers/Services/Pipes/others*/
import { BaseService } from '../../services';

@Component({
  selector: 'ish-display-apps',
  templateUrl: './ish-display-apps.component.html',
  styleUrls: ['./ish-display-apps.component.scss']
})
export class IshDisplayAppsComponent implements OnInit {

  public appnames: [] = [];

  constructor(private readonly baseservice: BaseService) { }

  ngOnInit(): void {
    this.appnames = JSON.parse(localStorage.getItem('apps'));
    this.baseservice.registerApp(this.appnames);
  }

  /**Navigating to clicked application */
  navigate(url) {
    singleSpa.navigateToUrl(url);
  }
}
