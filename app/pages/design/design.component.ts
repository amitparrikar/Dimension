import {Component} from '@angular/core';
import {NavParams, Platform, ViewController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/design/design.html'
})
export class DesignComponent{
  selectedItem: any;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController){


    this.selectedItem = this.params.get('item');


  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
