import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {
  list: any;
  passcu;
  passmoi;
  user;
  repassmoi;
  check = true;
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
      if (this.user == this.list[i].username && this.passcu == this.list[i].password) {
        if (this.passmoi == this.repassmoi) {
          alert('Chage password success')
          this.list[i].password = this.passmoi;
          console.log(this.list)
        }
        else alert('Sai me pass moi nhap r')
      }
      else this.check = false;
    }
    if (!this.check) {
      alert('Sai pass or username')
    }
  }

}
