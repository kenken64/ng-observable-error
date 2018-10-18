import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Car } from './car';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private http: HttpClient,
    public snackBar: MatSnackBar) { 
      
  }

  getCar(plateNo: string): Observable<Car>{
    return this.http.get<Car>(`http://localhost:3000/car?plateNo=${plateNo}`)
      .pipe(
        catchError(this.handleError<Car>('getCar')));
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(JSON.stringify(error.error));
      this.showErrorMessage(JSON.stringify(error.error));
      return throwError(error || 'generic backend error');
    }
  }

  showErrorMessage(msg) {
    let snackBarRef = this.snackBar.open(msg, 'Undo');
    console.log(snackBarRef);
  }

}
