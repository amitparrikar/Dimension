import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HomeComponent} from './pages/home/home.component';
import {MyOrderComponent} from './pages/myOrder/myOrder.component';
import {MyDraftComponent} from './pages/myDraft/myDraft.component';
import {SettingsComponent} from './pages/settings/settings.component'

import { OrderProvider } from './providers/order-provider/order-provider';
import { CommonProvider } from './providers/common-provider/common-provider';

@Component({
  templateUrl: 'build/app.html',
  providers: [OrderProvider, CommonProvider]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HomeComponent;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomeComponent },
      { title: 'My Orders', component: MyOrderComponent },
      { title: 'My Drafts', component: MyDraftComponent },
      { title: 'Settings', component: SettingsComponent }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
