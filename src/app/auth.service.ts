import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post('http://109.106.255.69:2208/student/login',data);
  }

  register(data:any){
    return this.http.post('http://109.106.255.69:2208/student/register',data);
  }
}
