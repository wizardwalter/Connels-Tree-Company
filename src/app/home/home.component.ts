import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public slides = [
    { src: "https://res.cloudinary.com/walterscloudinary/image/upload/v1640327097/Tree%20Company/117327050_157242766003308_6505868896464697417_n_1__ccexpress_c8d374.jpg" },
    { src: "https://res.cloudinary.com/walterscloudinary/image/upload/v1640328088/Tree%20Company/264193504_292509526220438_4828797239194064197_n_1_1__ccexpress_ym44ks.jpg" },
    { src: "https://res.cloudinary.com/walterscloudinary/image/upload/v1640328180/Tree%20Company/268312910_1376241812808377_8028347432798964292_n_1__ccexpress_qmuryn.jpg" },
    { src: "https://res.cloudinary.com/walterscloudinary/image/upload/v1640327603/Tree%20Company/260324490_193836039511777_8029127160758882076_n_ccexpress_yjenhr.jpg" },
    { src: "https://res.cloudinary.com/walterscloudinary/image/upload/v1640327936/Tree%20Company/258625113_4716499455132899_6309112928429823737_n_1__ccexpress_d4ixus.jpg" },
    { src: "https://res.cloudinary.com/walterscloudinary/image/upload/v1640328403/Tree%20Company/126463821_192135312404762_4113117318561997840_n_ccexpress_pefqgw.jpg" }
  ];

  ngOnInit(): void {
  }

}
