import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from 'usehooks-ts';
import { TasksList } from 'types/TasksList';
import { TaskListsIds } from 'types/TaskListsIds';
import { Task } from 'types/Task';
import { tasksListsMock } from 'mocks/taskListMock';

export const useTasksLists = () => {
  const [tasksLists, setTasksLists] = useLocalStorage<TasksList[]>('tasksLists', tasksListsMock);

  const tasksByIsDonSorter = (a: Task, b: Task) => {
    if (a.isDone === b.isDone) {
      return 0;
    }
    return a.isDone ? 1 : -1;
  };

  const createNewTask = (newTask: Task, taskListsId: TaskListsIds) => {
    const newTaskId = uuidv4();
    const newTasksList = tasksLists.map((list) => {
      if (list.id !== taskListsId) {
        return list;
      }
      return {
        ...list,
        tasks: [...list.tasks, { ...newTask, id: newTaskId }],
      };
    });
    setTasksLists(newTasksList);
  };

  const getTasksList = (taskListsId: TaskListsIds) => tasksLists.find((list) => list.id === taskListsId);

  const changeTaskDoneStatus = (taskId: string, newIsDone: boolean) => {
    const newTasksList = tasksLists.map((list) => {
      return {
        ...list,
        tasks: list.tasks
          .map((task) => {
            if (task.id === taskId) {
              return { ...task, isDone: newIsDone };
            }
            return task;
          })
          .sort(tasksByIsDonSorter),
      };
    });
    setTasksLists(newTasksList);
  };

  const findTask = (taskId: string) =>
    tasksLists.find((list) => list.tasks.find((task) => task.id === taskId))?.tasks.find((task) => task.id === taskId);

  const changeTaskPosition = ({
    taskId,
    newTasksList,
    newTasksIndex,
  }: {
    taskId: string;
    newTasksList: string;
    newTasksIndex: number;
  }) => {
    const draggedTask = findTask(taskId);

    const newTasksLists = tasksLists.map((tasksList) => {
      const tasksListCopy = JSON.parse(JSON.stringify(tasksList)) as TasksList;
      if (tasksListCopy.id === tasksList.id) {
        const newTasks = tasksListCopy.tasks.filter((task) => task.id !== taskId);
        tasksListCopy.tasks = [...newTasks];
      }
      if (tasksListCopy.id === newTasksList) {
        const newTasks = tasksListCopy.tasks;
        newTasks.splice(newTasksIndex, 0, draggedTask as Task);
        const newTasksSorted = newTasks.sort(tasksByIsDonSorter);
        tasksListCopy.tasks = [...newTasksSorted];
      }
      return tasksListCopy;
    });

    setTasksLists(newTasksLists);
  };

  return { getTasksList, createNewTask, changeTaskDoneStatus, findTask, changeTaskPosition };
};
