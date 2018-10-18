import { Component } from '@angular/core';
import { ErrorService } from './error.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-observable-error';
  constructor(private svc: ErrorService,private snackBar: MatSnackBar
    ){

  }

  testError(){
    this.svc.getCar(null).subscribe((result)=>{
      console.log(result);
    })
  }

  testOk(){
    this.svc.getCar('SGD1234R').subscribe((result)=>{
      console.log(result);
      this.snackBar.open(JSON.stringify(result));
    })
  }
}
