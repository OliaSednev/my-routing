import { Component } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users = [
    {
      id: 1,
      name: 'Olia'
    },
    {
      id: 2,
      name: 'Max'
    },
    {
      id: 3,
      name: 'Anna'
    }
  ];
}
