import { Component,OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit{

  contacts:any = [];
  constructor(private cSer:ContactsService)
  {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.cSer.getAll().subscribe(success => {
      console.log("success",success);
      let data:any = success;
      this.contacts = data.data;
    }, error => {
      console.log("error",error);
    })
  }
}
