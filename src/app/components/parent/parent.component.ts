import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  value: number;
  dataForChild: number;
  favCountry: string;

  constructor() { }

  ngOnInit() {
    this.value = this.dataForChild = 0;
    this.favCountry = '';
  }

  sendData() {
    this.dataForChild = this.value;
  }

  getData(event) {
    // console.log(event);
    this.favCountry = event;
  }

}
