import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManhinhchinhComponent } from './manhinhchinh/manhinhchinh.component';
import { Trang1Component } from './trang1/trang1.component';
import { Trang2Component } from './trang2/trang2.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { DoitaikhoanComponent } from './doitaikhoan/doitaikhoan.component';
import { DanhmucmhComponent } from './danhmucmh/danhmucmh.component';
import { ThitnComponent } from './thitn/thitn.component';
//import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ManhinhchinhComponent,
    Trang1Component,
    Trang2Component,
    GopyComponent,
    HoidapComponent,
    DangkyComponent,
    DangnhapComponent,
    QuenmatkhauComponent,
    DoitaikhoanComponent,
    DanhmucmhComponent,
    ThitnComponent,
    //FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ManhinhchinhComponent },
      { path: 'products', component: ManhinhchinhComponent },
      { path: 'productss1', component: Trang1Component },
      { path: 'productss2', component: Trang2Component },
      { path: 'gopy', component: GopyComponent },
      { path: 'hoidap', component: HoidapComponent },
      { path: 'dangnhap', component: DangnhapComponent },
      { path: 'dangky', component: DangkyComponent },
      { path: 'matkhau', component: QuenmatkhauComponent },
      { path: 'taikhoan', component: DoitaikhoanComponent },
      { path: 'dmmh', component: DanhmucmhComponent },
      { path: 'tracnghiem', component: ThitnComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
