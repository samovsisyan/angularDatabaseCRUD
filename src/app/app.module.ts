import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from './user/user.service';
import { CrudComponent } from './crud/crud.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { NewCrudComponent } from './new-crud/new-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    NewCrudComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
