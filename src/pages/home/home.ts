import { Component,NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: number = 51.678418;
  lng: number = 7.809007;
  
  constructor(public navCtrl: NavController) {

  }

}
