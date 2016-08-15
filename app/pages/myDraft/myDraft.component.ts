/**
 * Created by parrikaa on 08/08/16.
 */
import {Component} from '@angular/core';

@Component({
  templateUrl: 'build/pages/myDraft/myDraft.html'
})
export class MyDraftComponent{
  pageName:string;

  constructor(){
    this.pageName = 'My Drafts';
  }
}
