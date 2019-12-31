import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../data.service' ;
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] ,
  providers: [ DataService,LoginComponent,GlobalService ]
})
export class HomeComponent implements OnInit {

  user$: Object;
  @Input() userId: any ;

  constructor(private data: DataService, private router: Router,private global: GlobalService) { }

  ngOnInit() {
    this.userId = this.global.getId() ,
    // console.log(this.userId) ,
    this.data.getUsers(this.userId).subscribe(
      data => this.user$ = data
    );
  }

  userDisplay(){
    console.log(this.user$) ;
  }

  backtoLogin(){
    this.router.navigate(['../']);
  }

}