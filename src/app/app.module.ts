import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { LatestMovieNewsComponent } from './latest-movie-news/latest-movie-news.component';
import { MovieSliderComponent } from './movie-slider/movie-slider.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { MovieCardComponent } from './home-content/movie-card/movie-card.component';
import { QuickSearchBoxComponent } from './home-content/quick-search-box/quick-search-box.component';
import { AdvSearchBoxComponent } from './home-content/adv-search-box/adv-search-box.component';
import { NewsletterBoxComponent } from './home-content/newsletter-box/newsletter-box.component';
import { PopularPeopleSectionComponent } from './popular-people-section/popular-people-section.component';
import { ContactPageSectionComponent } from './contact-page-section/contact-page-section.component';
import { ContactSidebarComponent } from './contact-page-section/contact-sidebar/contact-sidebar.component';
import { ContactContentComponent } from './contact-page-section/contact-content/contact-content.component';
import { AppRoutingModule } from './app-routing.module';

import { MoviesService } from './movies.service';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { StarRatingModule } from 'levon-angular-star-rating';

import { HttpClientModule } from '@angular/common/http';
import { MovieDetailedViewComponent } from './movie-detailed-view/movie-detailed-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterSectionComponent,
    HeaderSectionComponent,
    LatestMovieNewsComponent,
    MovieSliderComponent,
    HomeContentComponent,
    MovieCardComponent,
    QuickSearchBoxComponent,
    AdvSearchBoxComponent,
    NewsletterBoxComponent,
    PopularPeopleSectionComponent,
    ContactPageSectionComponent,
    ContactSidebarComponent,
    ContactContentComponent,
    MovieDetailedViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    StarRatingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
