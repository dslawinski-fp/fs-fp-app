import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iconbutton',
  templateUrl: './iconbutton.component.html',
  styleUrls: ['./iconbutton.component.scss']
})
export class IconbuttonComponent implements OnInit {

  @Input() myroute : string;
  @Input() myicon : string;
  @Input() mytext : string;
  constructor() { }

  ngOnInit() {
  }

}
