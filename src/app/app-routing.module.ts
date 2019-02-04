import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeContentComponent } from './home-content/home-content.component'
import { PopularPeopleSectionComponent } from './popular-people-section/popular-people-section.component';
import { ContactPageSectionComponent } from './contact-page-section/contact-page-section.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeContentComponent},
  {path: 'popular-people', component: PopularPeopleSectionComponent},
  {path: 'contact', component: ContactPageSectionComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
})

export class AppRoutingModule { fdg

}
