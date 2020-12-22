import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { SigninModalComponent } from './shared/signin-modal/signin-modal.component';
import { SignupComponent } from './shared/signup/signup.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    HomeComponent,
    FooterComponent,
    SigninModalComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
