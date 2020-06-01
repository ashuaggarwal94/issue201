import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Custom Imported Components */
import { IshDisplayAppsComponent, EmptyRouteComponent } from './components';

const routes: Routes = [
  { path: "home", component: IshDisplayAppsComponent },
  { path: "", component: IshDisplayAppsComponent },
  { path: "**", component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
