import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {DimensionComponent} from '../dimension/dimension.component';
import {SubCategory} from "../../models/subCategory";



@Component({
  templateUrl: 'build/pages/subCategory/subCategory.html'
})
export class SubCategoryComponent implements OnInit{

  subCategoryData: SubCategory[];
  selectedItem: any;
  subCategoryName: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams){

  }

  ngOnInit() {
    this.selectedItem = this.navParams.get('item');
    this.subCategoryName = this.selectedItem.name;
    this.subCategoryData = this.selectedItem.data;
  }

  subCategoryItemTapped(event, item){
    this.navCtrl.push(DimensionComponent, {
      item: item
    });
  }

}
