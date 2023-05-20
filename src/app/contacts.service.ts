import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  getAll(){
    let id = localStorage.getItem("id2");
    let token =  localStorage.getItem("token2");
let headers:HttpHeaders= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('x-access-token', '' + token);

  return this.http.get('http://109.106.255.69:2208/contact/getAllContactByStudentId/' + id,{'headers': headers})
  }

  
}
