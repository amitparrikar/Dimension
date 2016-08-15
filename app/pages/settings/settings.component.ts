import {Component} from '@angular/core';

@Component({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsComponent{

  pageName: string;
  constructor(){
    this.pageName = 'Settings';

  }
}
