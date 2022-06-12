import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  routerURL!: string;


  ngOnInit(): void {
    this.routerURL = this.route.snapshot.queryParams['returnURL'] || '/'
  }

  loading = false;
  error = "";
  invalidLogin = false;

  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.loading = true;
  };

  register(){
    this.router.navigate(["register"]);
  }

}


