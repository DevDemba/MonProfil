import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface myData{
  obj:  Array<Object>
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  rootUrl = 'rootapi';
  redirect_uris: ["http://localhost:5000/callback"];

  getUserAuthentication(){
 
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/Json'})

    return this.http.post(this.rootUrl+'/token', { headers: reqHeader })
  }

  getUserDetails(){

    return this.http.get<myData>(this.rootUrl,
     { headers: new HttpHeaders({authorize:'https://id.api.isogeo.com/oauth/token'})
      
    }).subscribe(
      data =>{
        console.log(data, 'sommes nous connecter au serveur')
    })

  }


}
