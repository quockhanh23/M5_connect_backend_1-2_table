import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {PersonModule} from "./person/person.module";
import {BookModule} from "./book/book.module";
import { NotfoundComponent } from './notfound/notfound.component';
import {TestModule} from "./test/test.module";

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  exports: [
    // BookModule,
    // PersonModule,
    // TestModule,
  ]

})
export class AppModule {
}
