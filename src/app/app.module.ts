import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeCardComponent } from './components/recipes/recipe-card/recipe-card.component';
import { FavouriteListComponent } from './components/favourites/favourite-list/favourite-list.component';
import { FavouriteEditComponent } from './components/favourites/favourite-edit/favourite-edit.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { UserAccountComponent } from './components/user/user-account/user-account.component';
import { RecipeViewComponent } from './components/recipes/recipe-card/recipe-view/recipe-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeCardComponent,
    FavouriteListComponent,
    FavouriteEditComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserAccountComponent,
    RecipeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
