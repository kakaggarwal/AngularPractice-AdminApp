import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'posts', component: PostsComponent },
  { path:'categories', component: CategoriesComponent },
  { path:'users', component: UsersComponent },
  { path:'login', component: LoginComponent },
  { path:'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
