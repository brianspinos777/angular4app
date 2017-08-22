import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { UsersService } from './services/users.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GroupsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:id',
        component: UsersComponent
      },
      {
        path: 'groups',
        component: GroupsComponent
      },
    ])
  ],
  providers: [
  	UsersService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
