import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../models/user';
import { UserR } from '../../models/userR';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

   public users: User[] = [];
   notFound = false;
   public user: UserR | null | undefined;


    constructor(private api: ApiService, private router: Router) { }

    // Lamar a todos los usuarios
    public ngOnInit(): void {
      this.api.getAllUsersRegister()
      .subscribe( (users) => {
        console.log('valores', users);
        this.users = users;
      })
    }
}
