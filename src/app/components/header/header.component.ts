import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  
  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  toggleAddTask() {
    console.log('toggle');
  }

}
