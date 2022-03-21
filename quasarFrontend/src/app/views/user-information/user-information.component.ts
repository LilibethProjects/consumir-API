import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { UserR } from '../../models/userR';
import { ApiService } from '../../services/api/api.service';


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
})
export class UserInformationComponent implements OnInit {

  public userDatoLista$: Observable<UserR> ;
  user = [];
  constructor(private activate: ActivatedRoute, private api: ApiService) { }

  public ngOnInit(): void {

    this.activate.params.subscribe((params) => {
      const id = params['id'];
      console.log('datos', id);
      this.getDetail(id);
    });

  }
  // Llamar para ver un usuario
    getDetail(id) {
      this.api.getById(id).subscribe((data: any) => {
        this.user = data.data;
      });
    }
  }
