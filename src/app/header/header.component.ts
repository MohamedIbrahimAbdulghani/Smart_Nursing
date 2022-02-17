import { Component, OnInit } from '@angular/core';
import { IItems } from '../Shared/GeneralObject';
import { Items } from '../Shared/Connect';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _item: Items) { }

  AllItems: Array<IItems>=[];


  ngOnInit(): void {

     this._item.GetAllData().subscribe((data) => {
       this.AllItems = data;
       console.log(data);
     });

  }
}
