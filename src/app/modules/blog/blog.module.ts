import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { McCoreModule } from '../mc-core/mc-core.module';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Layouts
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

// Components
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NewsletterSectionComponent } from './components/newsletter-section/newsletter-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HomePageComponent,
    ArticlePageComponent,
    ArticleCardComponent,
    UserPageComponent,
    NewsletterSectionComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    McCoreModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ]
})
export class BlogModule { }
