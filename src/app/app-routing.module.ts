import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./employee-list/employee-list/employee-list.module").then((m) => m.EmployeeListModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
