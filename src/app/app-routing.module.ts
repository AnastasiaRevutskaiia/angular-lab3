import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [{ path: 'registration', component: RegistrationPageComponent },
                        { path: 'home', component: HomeComponent },
                        { path: 'setting', component: SettingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
