import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchRouteComponent } from './research-route/research-route.component';


const routes: Routes = [
  {path: '', redirectTo: 'research-a-route', pathMatch:'full'},
  {path: 'research-a-route', component: ResearchRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
