import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  public data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: false
    },
    {
      name: 'warning',
      selected: true
    },
    {
      name: 'danger',
      selected: false
    },
    {
      name: 'dark',
      selected: false
    },
    {
      name: 'medium',
      selected: true
    },
    {
      name: 'light',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public onClick(check): void {
    console.log(check);
  }

}
