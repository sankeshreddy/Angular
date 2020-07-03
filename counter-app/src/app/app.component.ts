import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Counter App';

  count: number = 0;

  hadleIncrease = () =>{
    if(this.count < 10){
      
      this.count = this.count + 1;
    }
    else{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'cannot increment the counter'   
      })
     
    }
  }

  handleDecrease = () =>{

    if(this.count > 0){

      this.count = this.count - 1;
    }

    else{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'count value should not be less than 0'   
      })
    }
  }

  handleReset = () =>{
    this.count = 0;
  }
}
