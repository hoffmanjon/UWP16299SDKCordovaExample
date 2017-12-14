import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var SqlServerPlugin: any

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  status="OK";

  constructor(public navCtrl: NavController) {

  }

  supported() { 
    this.status = 'clicked'
    SqlServerPlugin['supported']("test", (retValue) => {
      this.status = retValue
    })
  }

  testConnection() { 
    this.status = 'clicked'
    SqlServerPlugin['testConnection']("test", (retValue) => {
      this.status = retValue
    }) 
  }
}
