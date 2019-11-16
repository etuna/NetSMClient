import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '',
    component: LoginComponent,
    pathMatch: 'full'},
  { path: 'en',
    redirectTo: ''} // because english language is the default one
  // otherwise redirect to 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
