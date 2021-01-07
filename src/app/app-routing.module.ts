import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminQueryListComponent } from './admin-query-list/admin-query-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  {
    path: 'admin-query-list',
    component: AdminQueryListComponent,
  },
  {
    path: '',
    component: CustomerFormComponent,
    pathMatch: 'full',   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
