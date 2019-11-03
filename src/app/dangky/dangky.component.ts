import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  list: any;
  check = true;
  user;
  passcu;
  fullname;
  email;
  gender;
  birthday;
  schoolfee;
  marks;
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
      if (this.user != this.list[i].username) {
        alert('Tạo tài khoản thành công');
        this.list[i].username = this.user;
        this.list[i].password = this.passcu;
        this.list[i].fullname = this.fullname;
        this.list[i].email = this.email;
        this.list[i].gender = this.gender;
        this.list[i].birthday = this.birthday;
        this.list[i].schoolfee = this.schoolfee;
        this.list[i].marks = this.marks;
      } else this.check = false;
    } if (!this.check) {
      alert('Sai pass or username')
    }
  }

}
