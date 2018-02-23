import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mediaIcons:string[] = ["facebook-square","twitter-square","google-plus-square","linkedin-square"];
  logo: string = "assets/images/logo.png";

  constructor() { }

  ngOnInit() {
  }

}
