import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { WidgetComponent } from './widget/widget.component';


const routes: Routes = [{ path: 'registration', component: RegistrationPageComponent },
                        { path: '', component: HomeComponent },
                        { path: 'setting', component: SettingComponent },
                        { path: 'widget', component: WidgetComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
