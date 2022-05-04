import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'all-articles', component: HomePageComponent },
      { path: 'announcements', component: HomePageComponent },
      { path: 'project-updates', component: HomePageComponent },
      { path: 'platform', component: HomePageComponent },
      { path: 'technology', component: HomePageComponent },
      { path: 'tutorials', component: HomePageComponent },
      { path: 'article_name', component: ArticlePageComponent },
      { path: 'user_name', component: UserPageComponent },
      { path: '', redirectTo: 'all-articles', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
