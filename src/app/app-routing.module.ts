import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'/departments',pathMatch:'full'},
  {path:'departments', component:DepartmentListComponent},
  {path:'departments/:id', component:DepartmentDetailComponent},
  {path:"**", component:PagenotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
