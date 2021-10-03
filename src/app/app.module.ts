import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Импортируем FormsModule
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';

// В imports нужно добавить FormsModule
@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
