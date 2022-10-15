import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compenents/home/home.component';
import { HeaderComponent } from './compenents/header/header.component';
import { FooterComponent } from './compenents/footer/footer.component';
import { ContactComponent } from './compenents/contact/contact.component';
import { MatchesComponent } from './compenents/matches/matches.component';
import { PlayersComponent } from './compenents/players/players.component';
import { BlogComponent } from './compenents/blog/blog.component';
import { NotfoundComponent } from './compenents/notfound/notfound.component';
import { SignupComponent } from './compenents/signup/signup.component';
import { LoginComponent } from './compenents/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './compenents/add-match/add-match.component';
import { AdminComponent } from './compenents/admin/admin.component';
import { CardComponent } from './compenents/card/card.component';
import { AddPlayersComponent } from './compenents/add-players/add-players.component';
import { TeteComponent } from './compenents/tete/tete.component';
import { MatcheComponent } from './compenents/matche/matche.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    MatchesComponent,
    PlayersComponent,
    BlogComponent,
    NotfoundComponent,
    SignupComponent,
    LoginComponent,
    AddMatchComponent,
    AdminComponent,
    CardComponent,
    AddPlayersComponent,
    TeteComponent,
    MatcheComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
