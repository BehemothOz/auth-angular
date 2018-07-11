import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { EventService } from './shared/event.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, EventService,
    { provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
