import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childData;

  @Output() dataEvent = new EventEmitter();

  favCountry: string;

  constructor() { }

  ngOnInit() {
    this.favCountry = '';
  }

  sendData2Parent() {
    this.dataEvent.emit(this.favCountry);
  }

}
