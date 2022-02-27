import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PhotocardListComponent } from './photocard-list/photocard-list.component';
import { MyPhotocardComponent } from './my-photocard/my-photocard.component';

@NgModule({
  declarations: [			AppComponent,
      ProfileComponent,
      PhotocardListComponent,
      MyPhotocardComponent
   ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
