import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { CategoryComponent } from './category/category.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { StartingPageComponent } from './starting-page/starting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    DeleteContactComponent,
    AddContactComponent,
    UpdateContactComponent,
    CategoryComponent,
    RegisterComponent,
    LoginComponent,
    StartingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],

  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
