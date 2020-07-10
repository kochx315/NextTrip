import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchRouteComponent } from './research-route/research-route.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'research-a-route', component: ResearchRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
