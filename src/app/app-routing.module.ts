import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyPhotocardComponent } from './my-photocard/my-photocard.component';
import { PhotocardListComponent } from './photocard-list/photocard-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'photocard-list',
    pathMatch: 'full'
  },
  {
    path: 'photocard-list',
    component: PhotocardListComponent
  },
  {
    path: 'my-photocard',
    component: MyPhotocardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
