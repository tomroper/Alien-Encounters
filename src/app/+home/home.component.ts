import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { NgForm } from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  
  clicked(event) {
    event.preventDefault();
    this.router.navigate(['/register'])
  }

}
