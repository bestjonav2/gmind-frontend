import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
