import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbIconModule,
  NbActionsModule, NbContextMenuModule, NbUserModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {ComponentsModule} from "./components/components.module";
import {AuthenticationModule} from "./pages/authentication/authentication.module";
import { ArticleComponent } from './pages/article/article.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ArticleOverviewComponent } from './pages/article-overview/article-overview.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ArticleEditComponent } from './pages/article-edit/article-edit.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ArticleSearchComponent } from './pages/article-overview/article-search/article-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ProfileComponent,
    ProfilePageComponent,
    ArticleOverviewComponent,
    AdminComponent,
    ArticleEditComponent,
    DashboardComponent,
    ArticleSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbIconModule,
    NbActionsModule,
    NbContextMenuModule,
    NbUserModule,
    ComponentsModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
