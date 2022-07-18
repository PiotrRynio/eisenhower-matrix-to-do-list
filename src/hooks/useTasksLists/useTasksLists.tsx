import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from 'usehooks-ts';
import { TasksList } from 'types/TasksList';
import { TaskListsIds } from 'types/TaskListsIds';
import { Task } from 'types/Task';
import { tasksListsMock } from 'mocks/taskListMock';

export const useTasksLists = () => {
  const [tasksLists, setTasksLists] = useLocalStorage<TasksList[]>('tasksLists', tasksListsMock);

  const createNewTask = (newTask: Task, taskListsId: TaskListsIds) => {
    const newTaskId = uuidv4();
    const newTasksList = tasksLists.map((list) => {
      if (list.id === taskListsId) {
        return {
          ...list,
          tasks: [...list.tasks, { ...newTask, id: newTaskId }],
        };
      }
      return list;
    });
    setTasksLists(newTasksList);
  };

  const getTasksList = (taskListsId: TaskListsIds) => tasksLists.find((list) => list.id === taskListsId);

  return { tasksLists, getTasksList, createNewTask };
};
