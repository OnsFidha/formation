import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './compenents/add-match/add-match.component';
import { AddPlayersComponent } from './compenents/add-players/add-players.component';
import { AdminComponent } from './compenents/admin/admin.component';
import { BlogComponent } from './compenents/blog/blog.component';
import { ContactComponent } from './compenents/contact/contact.component';
import { HomeComponent } from './compenents/home/home.component';
import { LoginComponent } from './compenents/login/login.component';
import { MatchesComponent } from './compenents/matches/matches.component';
import { NotfoundComponent } from './compenents/notfound/notfound.component';
import { SignupComponent } from './compenents/signup/signup.component';


const routes: Routes = [{ path:"home", component:HomeComponent},
{path:"contact", component:ContactComponent},
{path:"signup", component:SignupComponent},
{path:"login", component:LoginComponent},
{path:"blog", component:BlogComponent},
{path:"matches", component:MatchesComponent},
{path:"addmatch", component:AddMatchComponent},
{path:"admin", component:AdminComponent},
{path:"addplayer", component:AddPlayersComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:"**", component:NotfoundComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
