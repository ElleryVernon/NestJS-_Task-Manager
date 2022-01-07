import { Controller } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
