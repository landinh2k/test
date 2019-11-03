import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { format } from 'util';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  list: any;
  pass;
  user;
  check = true;
  binding;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getData().subscribe(data => {
      this.list = data
      console.log(this.list);
    })
  }
  getData() {
    return this.http.get('../../assets/Students.js')
    //console.log()
  }
  Check() {
    this.check = true;
    for (let i = 0; i < this.list.length; ++i) {
      if (this.user == this.list[i].username && this.pass == this.list[i].password) {
        alert('Right');
      }
      else this.check = false;
    }
    if (!this.check) {
      alert('Log in di tml')
    }
  }

}
