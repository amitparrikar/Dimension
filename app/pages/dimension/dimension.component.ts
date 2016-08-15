import {Component, OnInit} from '@angular/core';
import {NavParams, NavController, ViewController, ModalController, Platform} from 'ionic-angular';
import {SubCategory} from "../../models/subCategory";
import {DesignComponent} from "../design/design.component";




@Component({
  templateUrl: 'build/pages/dimension/dimension.html'
})
export class DimensionComponent implements OnInit{

  public selectedItem: SubCategory;
  public itemName: string;
  public itemCode: string;
  public itemDimension: string;
  public itemDesignImages: string[];

  constructor(private navParams: NavParams,
              private navController: NavController,
              private  modalCtrl: ModalController){

  }

  ngOnInit(){
    this.selectedItem = <SubCategory>this.navParams.get('item');

    this.itemName = this.selectedItem.name;
    this.itemCode = this.selectedItem.code;
    this.itemDimension = this.selectedItem.dimensionLabels;
    this.itemDesignImages = this.selectedItem.designImages;

  }

  openModal(){
    let item = {
      name: this.itemName,
      itemDesigns: this.itemDesignImages
    };

    let modal = this.modalCtrl.create(DesignComponent, {item: item});
    modal.present();
  }
}
