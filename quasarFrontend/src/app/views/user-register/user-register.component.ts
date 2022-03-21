import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../models/user';
import { UserR } from '../../models/userR';
import { ResponseRequest } from '../../models/usersRegisters.interface';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

   public users: User[] = [];
   notFound = false;
  public user: UserR | null;


  constructor(private api: ApiService, private router: Router) { }
  public ngOnInit(): void {

    this.api.getAllUsersRegister()
    .subscribe( users => {

      console.log('valores', users);
      this.users = users;
    })
  }

public viewUser(id: any) {
  this.router.navigate(['userInformation', id]);
  console.log(id);
}

getUser(userId: string) {
this.notFound = false;
this.user = null;

this.api.getUser(userId).subscribe((userApi: UserR) => {
  this.user = userApi;
  console.log('un usuario:', this.user);
}, (err: any) => {
  console.log(err);
  this.notFound = true;
});
}
}
