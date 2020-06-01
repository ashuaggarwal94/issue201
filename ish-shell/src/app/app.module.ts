import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

/**Custom Imported Components */
import { AppComponent, IshDisplayAppsComponent } from './components';

/**All components list */
const exportedComponents = [
  AppComponent,
  IshDisplayAppsComponent
];


@NgModule({
  declarations: [
    ...exportedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
