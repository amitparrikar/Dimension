import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/subCategory/subCategory.html'
})
export class SubCategory implements OnInit{

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

}
