import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-thitn',
  templateUrl: './thitn.component.html',
  styleUrls: ['./thitn.component.css']
})
export class ThitnComponent implements OnInit {

  constructor(private http: HttpClient) { }
  list: any;

  ngOnInit() {
    this.getData().subscribe(data => {
      this.list = data
      console.log(this.list);
    })
  }
  getData() {
    return this.http.get('../../assets/Quizs/ADAV.js')
    //console.log()
  }


}
