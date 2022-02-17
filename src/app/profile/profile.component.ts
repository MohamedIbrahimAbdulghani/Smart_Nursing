import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  numofplus: number = 0;
  numofplusstop: any = setInterval(() => {
    this.numofplus++;
    if(this.numofplus == 100) {
      clearInterval(this.numofplusstop);
    }
  }, 150);

  numofplus2: number = 0 ;
  numofplusstop2: any = setInterval(() => {
    this.numofplus2++;
    if(this.numofplus2 == 100) {
      clearInterval(this.numofplusstop2);
    }
  }, 1);

  numofplus3: number = 0 ;
  numofplusstop3: any = setInterval(() => {
    this.numofplus3++;
    if(this.numofplus3 == 100) {
      clearInterval(this.numofplusstop3);
    }
  }, 1);
  ToHome() {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }
  ToAbout() {
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  ToServices() {
    document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
  }
  ToNurse() {
    document.getElementById("nurse")?.scrollIntoView({behavior:"smooth"});
  }
  ToContact() {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
