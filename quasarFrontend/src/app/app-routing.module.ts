import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { UserInformationComponent } from './views/user-information/user-information.component';
import { UserRegisterComponent } from './views/user-register/user-register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserRegisterComponent},
  {path: 'userInformation', component: UserInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ LoginComponent, UserRegisterComponent, UserInformationComponent];
