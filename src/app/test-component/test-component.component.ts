import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  aleatorio:Number = Math.floor(Math.random()*100);
  constructor() { }

  ngOnInit() {
  }

}
