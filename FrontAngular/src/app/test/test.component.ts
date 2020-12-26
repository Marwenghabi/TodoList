import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title ="Formation"
  imgUrl="../../assets/images/logo-01.png"
  value = 2
  abc = false
  entrepriseName="Formation"
//
  constructor() { }

  ngOnInit() {
  }

  myFunction(){
    console.log(this.entrepriseName);
    
  }

}
