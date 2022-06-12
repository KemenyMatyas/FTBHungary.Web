import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
