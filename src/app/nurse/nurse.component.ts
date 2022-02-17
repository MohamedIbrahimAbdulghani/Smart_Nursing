import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
