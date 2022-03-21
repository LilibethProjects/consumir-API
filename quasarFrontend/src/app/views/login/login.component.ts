import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginInterface } from '../../models/login.interface';
import { ResponseInterface } from '../../models/responsive.interface';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup( {
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  public onLogin (form: LoginInterface) {

    this.api.loginUser(form).subscribe((data) => {
      const dataResponse: ResponseInterface  = data;
      this.router.navigate(['user']);
      console.log('datos', dataResponse);

    });
  }

}
