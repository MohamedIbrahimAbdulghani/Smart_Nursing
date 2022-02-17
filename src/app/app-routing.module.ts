import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NurseComponent } from './nurse/nurse.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CvComponent } from './cv/cv.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: MainComponent},
  {path:"navbar", component: NavbarComponent},
  {path:"header", component: HeaderComponent},
  {path:"about", component: AboutComponent},
  {path:"services", component: ServicesComponent},
  {path:"nurse", component: NurseComponent},
  {path:"contact", component: ContactComponent},
  {path:"footer", component: FooterComponent},
  {path:"cv", component: CvComponent},
  {path:"reservation", component: ReservationComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"profile", component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
