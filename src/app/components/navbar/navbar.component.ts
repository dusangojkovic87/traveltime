import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  openNavbar:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.openNavbar = !this.openNavbar;

  }

}
