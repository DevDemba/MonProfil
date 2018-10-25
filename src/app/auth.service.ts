import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

interface myData{
  obj:  Array<Object>
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password){

    return this.http.get<myData>('https://jsonplaceholder.typicode.com/posts'
    ).subscribe(
      data =>{
        console.log(data, 'sommes nous connecter au serveur')
    })
  }



}
