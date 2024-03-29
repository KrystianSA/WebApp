import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { CategoryComponent } from './category/category.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { StartingPageComponent } from './starting-page/starting-page.component';

const routes: Routes = [
  { path: '', component: StartingPageComponent },
  { path: '*', component: AppComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'delete', component: DeleteContactComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'update', component: UpdateContactComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
