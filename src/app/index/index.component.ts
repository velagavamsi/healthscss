import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export class State {
  constructor(public name: string) { }
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  selectIndex: number = 0;
  nearest: Array<any> = [
    {span:'Nearest', h1:'Hospitals'},
    {span:'Nearest', h1:'Blood Banks'},
    {span:'Nearest', h1:'Pharmacy'}
  ];
  dummy:boolean=false;
  languageAutoComplete: boolean=false;

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  selectLanguage: string;

  states: State[] = [
    {
      name: 'Arkansas'
    },
    {
      name: 'California'
    },
    {
      name: 'Florida'
    },
    {
      name: 'Texas'
    }
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  selectedLanguage(){
    this.languageAutoComplete=false;
  }
  _next(){
     ++this.selectIndex;
     if(this.nearest.length == this.selectIndex)  
      this.selectIndex = 0;
  }
  _prev(){
    --this.selectIndex;
    if(this.selectIndex < 0)
    this.selectIndex = this.nearest.length - 1;
  }

  ngOnInit() {
  }

}
