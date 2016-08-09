/**
 * Created by parrikaa on 08/08/16.
 */
import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderProvider } from '../../providers/order-provider/order-provider';
import { CommonProvider } from '../../providers/common-provider/common-provider';
import {Category} from "../../models/category";

import {SubCategory} from '../subCategory/subCategory.component';


@Component({
  templateUrl: 'build/pages/home/home.html',

  // Add the Providers as part of our page component
  providers: [OrderProvider, CommonProvider]
})
export class HomeComponent implements OnInit{

  public categoryData: Category[];
  public selectedItem: any;

  constructor(private orderProvider: OrderProvider,
              private commonProvider: CommonProvider,
              public navCtrl: NavController,
              public navParams: NavParams){

  }

  // implement OnInit's 'ngOnInit' method
  ngOnInit() {
    let self = this;

    self.selectedItem = self.navParams.get('item');
    self.commonProvider.getDesign().then(function (data) {
      self.categoryData = data;
    });
  }

  categoryItemTapped(event, item){
    this.navCtrl.push(SubCategory, {
      item: item
    });
  }
}
