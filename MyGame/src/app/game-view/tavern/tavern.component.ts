import { Component } from '@angular/core';
import {UserServiceService} from "../../../services/user-service.service";

@Component({
  selector: 'app-tavern',
  templateUrl: './tavern.component.html',
  styleUrls: ['./tavern.component.scss']
})
export class TavernComponent {

  constructor(private UserService : UserServiceService) { }

  foodItems: any[] = [
    {
      name: 'Bread',
      price: 10,
      image: 'assets/items/bread.png',
      health: 15,
    },
    {
      name: 'Pork',
      price: 20,
      image: 'assets/items/pork.png',
      health: 25,
    },
    {
      name: 'Chicken',
      price: 15,
      image: 'assets/items/chicken.png',
      health: 20,
    },
    {
      name: 'Beer',
      price: 5,
      image: 'assets/items/beer.png',
      health: 10,
    }
  ]



  buyItem(item: any) {
    console.log(item)
  }

  Eat(health: number, cost: number) {
    console.log(health, cost)
  }

  sleep(hours: number) {
    this.makeTimePass(hours);
  }

  makeTimePass(hours: number) {
    console.log(hours);
  }
  ngOnInit() {
    this.UserService.user
      .subscribe((value) => {
        console.log('user', value);
      })
  }

}
