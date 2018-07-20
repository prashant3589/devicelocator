import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-root',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
export class MapsComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB27IflEAH4CLf825AvmiMbXE7NTK9obeA'
    })
  ],
  declarations: [ MapsComponent ],
  bootstrap: [ MapsComponent ]
})
export class Maps {

}
