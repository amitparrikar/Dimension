/**
 * Created by parrikaa on 08/08/16.
 */
import {Component} from '@angular/core';

@Component({
  templateUrl: 'build/pages/myOrder/myOrder.html'
})
export class MyOrderComponent{
  pageName: string;
  constructor(){
    this.pageName = 'My Orders';
  }
}
