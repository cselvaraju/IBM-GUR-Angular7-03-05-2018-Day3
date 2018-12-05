import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PiglatindemoComponent } from './components/piglatindemo/piglatindemo.component';
import { AsyncactorlistComponent } from './components/asyncactorlist/asyncactorlist.component';
import { PostsdemoComponent } from './components/postsdemo/postsdemo.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'piglatin', component: PiglatindemoComponent},
  {path: 'asyncactor', component: AsyncactorlistComponent},
  {path: 'posts', component: PostsdemoComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
