import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PhotoComponent } from './photo/photo.component';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { MsgComponent } from './msg/msg.component';
import { HttpGetComponent } from './http-get/http-get.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'photo', component:PhotoComponent},
  {path: 'destination', component:DestinationComponent},
  {path: 'msg', component:MsgComponent},
  {path: 'http', component:HttpGetComponent},
  {path: ' ', redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
