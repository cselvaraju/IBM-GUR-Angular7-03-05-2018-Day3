import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiglatinPipe } from './pipes/piglatin.pipe';
import { PiglatindemoComponent } from './components/piglatindemo/piglatindemo.component';

import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

import { ObservableService } from './services/observable.service';
import { ObservabledemoComponent } from './components/observabledemo/observabledemo.component';
import { AsyncActorService } from './services/asyncactor.service';
import { AsyncactorlistComponent } from './components/asyncactorlist/asyncactorlist.component';
import { PostsdemoComponent } from './components/postsdemo/postsdemo.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PiglatinPipe,
    PiglatindemoComponent,
    ParentComponent,
    ChildComponent,
    ObservabledemoComponent,
    AsyncactorlistComponent,
    PostsdemoComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ObservableService,
    AsyncActorService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
