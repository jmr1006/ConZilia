import { Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage  {
public hoy: Date;
public days_label: Array<string> = [
  'Lun', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'
];
  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){
       //called after the constructor and called  after the first ngOnChanges()
      this.hoy = new Date(Date.now());
  }
}
