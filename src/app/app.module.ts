import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { NgCalendarModule  } from 'ionic2-calendar';

import { IonCalendarModule } from '@ionic2-extra/calendar';
import { Ionic2Calendar } from 'ionic2-calendar2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonCalendarModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},

    { provide: LOCALE_ID, useValue: 'es' }


  ]
})
export class AppModule {}
