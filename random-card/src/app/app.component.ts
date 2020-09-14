import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';
// import {Location} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-card';

  user : any;

  constructor(private userService: UserService, 
    private toastr: ToastrService, ){}
    // private location: Location

  ngOnInit() {
    
    this.userService.getUser().subscribe(
      (user:any) => {
        console.log(user);
        this.user = user.results[0];
      },
      (err) => {
        console.log(err);
        this.toastr.error(err.status, "OOPS Something went wrong");
      },
    );
  }
  
  generateUser(){

    this.userService.getUser().subscribe(
      (user:any) => {
        console.log(user);
        this.user = user.results[0];
    },
    (err) => {
      console.log(err);
      this.toastr.error(err.status, "OOPS Something");
    }
    );
  }

  // load(){
  //   location.reload();
  // }
}
