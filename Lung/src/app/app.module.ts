import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './info/info.component';
import { DetectComponent } from './detect/detect.component';
import { LoginComponent } from './login/login.component';
import { CNNComponent } from './cnn/cnn.component';
import { SVMComponent } from './svm/svm.component';
import { RFComponent } from './rf/rf.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    DetectComponent,
    LoginComponent,
    CNNComponent,
    SVMComponent,
    RFComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
