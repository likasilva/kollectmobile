import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-photocard',
  templateUrl: './my-photocard.component.html',
  styleUrls: ['./my-photocard.component.css']
})
export class MyPhotocardComponent implements OnInit {
  public photocards = [{
    name: 'Dreamcatcher',
    createdAt: '2022-11-02',
    rating: 'medium',
    imageUrl: "https://s2.glbimg.com/JrqM211r6Fh9z784XH4865CSCVE=/top/e.glbimg.com/og/ed/f/original/2021/09/08/image_LfZgZow.png",
    photocardCode: '991232138',
    owner: {
      name: 'Lilian Silva',
      email: 'lilinscmt@gmail.com',
      imageUrl: 'https://i.pinimg.com/736x/a4/4d/ed/a44dedbb9a7eda174c82fa1f1ded38b8.jpg',
      userCode: '12i31287'
    }
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
