import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  ngOnInit(): void {
    
  }

}
