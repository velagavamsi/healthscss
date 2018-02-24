import { Component, OnInit } from '@angular/core';

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
    {span:'Nearest', h1:'Pharmacies'}
  ];

  constructor() { }
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
