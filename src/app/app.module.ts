import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RepositoryComponent } from './repository/repository.component';
import {CardModule} from 'primeng/card';




@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
