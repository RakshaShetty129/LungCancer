import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { CNNComponent } from './cnn/cnn.component';
import { SVMComponent } from './svm/svm.component';
import { RFComponent } from './rf/rf.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent},
{ path: 'info', component: InfoComponent},
{ path: 'cnn', component: CNNComponent},
{ path: 'svm', component: SVMComponent},
{ path: 'rf', component: RFComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
