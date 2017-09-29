import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_API_KEY
    })
  ],
  providers: [GoogleMapsAPIWrapper, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
