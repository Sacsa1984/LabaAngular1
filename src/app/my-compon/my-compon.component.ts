import { Component, OnInit } from '@angular/core';
import{Arr} from './MyArr';
@Component({
  selector: 'app-my-compon',
  templateUrl: './my-compon.component.html',
  styleUrls: ['./my-compon.component.css']
})
export class MyComponComponent implements OnInit {
Arr=["If you think your teacher is tough, wait till you get a boss","Life is not fair — get used to it!","Success is a lousy teacher. It seduces smart people into thinking they can’t lose","Be nice to nerds. Chances are you’ll end up working for one"]
  constructor() { }

  ngOnInit(): void {
  }

}
