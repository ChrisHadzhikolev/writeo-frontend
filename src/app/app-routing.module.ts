import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from "./pages/default/default.component";

const routes: Routes = [
  {
    path: 'default',
    component: DefaultComponent,
    loadChildren: () =>
      import('./pages/default/default.module').then((m) => m.DefaultModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
