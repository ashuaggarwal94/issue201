import { Injectable } from '@angular/core';
import * as singleSpa from 'single-spa';

declare var SystemJS: any;
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  /**Register applications */
  registerApp(appnames) {
    appnames.forEach(element => {
      const status = singleSpa.getAppStatus(element.label);
      singleSpa.registerApplication({
        name: element.label,
        app: () => SystemJS.import(element.appurl),
        activeWhen: element.route
      })
    });
    singleSpa.start();
  }
}
