import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserRegisterList } from 'src/app/models/usersRegisters.interface';
import { ApiService } from '../../services/api/api.service';
import { UserR } from '../../models/userR';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
})
export class UserInformationComponent implements OnInit {

  public userDatoLista$: Observable<UserR> ;
 user =[];
  constructor(
              private activate: ActivatedRoute, private api: ApiService) { }

  public ngOnInit(): void {

    this.activate.params.subscribe((params) => {
      const id = params['id'];
      console.log('datos', id);
      this.getDetail(id);
    });

  }
  getDetail(id) {
    this.api.getById(id).subscribe((data: any) => {
      this.user = data.data;
    });
  }
}
