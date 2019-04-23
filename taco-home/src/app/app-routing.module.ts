import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyViewComponent } from './company-view/company-view.component';

const routes: Routes = [
  { path: 'company/:id', component: CompanyViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
