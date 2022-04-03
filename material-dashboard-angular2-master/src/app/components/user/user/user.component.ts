import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/components/service/auth.service';
import { User } from 'app/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users:any;
 user=new User;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.getUserData();
  }
  getUserData(){
    console.log('liste des users');
       this.authservice.getAuth().subscribe(res=>{
       console.log(res);
       this.users = res; //affichage dans le tab
    })

  }
  insertData(){
console.log('bonjour-insertion-test');
//console.log(this.user);
 }

}
