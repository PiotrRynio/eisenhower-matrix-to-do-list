import { TaskListsIds } from './TaskListsIds';
import { Task } from './Task';

export type TasksList = {
  id: TaskListsIds;
  title: string;
  tasks: Task[];
};
