import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-danhmucmh',
  templateUrl: './danhmucmh.component.html',
  styleUrls: ['./danhmucmh.component.css']
})
export class DanhmucmhComponent implements OnInit {
  list: any;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getData().subscribe(data => {
      this.list = data
      console.log(this.list);
    })
  }
  getData() {
    return this.http.get('../../assets/Subjects.js')
    //console.log()
  }

}
