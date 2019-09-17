import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { HotelComponent } from './hotel/hotel.component';
import { RoomComponent } from './room/room.component';
import { HotelAddComponent } from './hotel/hotel-add/hotel-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FileSelectDirective } from 'ng2-file-upload';
import {MatSortModule} from '@angular/material/sort';
import { SamiraComponent } from './samira/samira.component';
import { AboutComponent } from './samira/about/about.component';
import { HeaderComponent } from './samira/header/header.component';
import { FooterComponent } from './samira/footer/footer.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
const routes: Routes = [
  {path: '', redirectTo: 'samira', pathMatch: 'full' },
    { path: 'samira' , component: SamiraComponent,
  children: [
    {path: 'about', component: AboutComponent},
  ]
},
  {path: 'admin', component: HomeComponent,
  children: [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'room', component: RoomComponent , canActivate: [AuthGuardService]},
  {path: 'room/add', component: AddRoomComponent , canActivate: [AuthGuardService]},
  {path: 'hotel', component: HotelComponent , canActivate: [AuthGuardService]},
  {path: 'hotel/add', component: HotelAddComponent , canActivate: [AuthGuardService]},
  {path: 'hotel/edit', component: HotelAddComponent , canActivate: [AuthGuardService]},
  {path: 'profile', component: ProfileComponent , canActivate: [AuthGuardService]},
]
}
];
@NgModule({
  declarations: [
    AppComponent,
    SamiraComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SidebarComponent,
    HotelComponent,
    HotelAddComponent,
    FileSelectDirective,
    RoomComponent,
    AddRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    OwlModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService , AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
