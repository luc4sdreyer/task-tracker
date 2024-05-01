import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks(): Observable<Task[]> {
    // Use an Observable, almost like a Promise
    const tasks = of(TASKS);
    return tasks;
  }

}
