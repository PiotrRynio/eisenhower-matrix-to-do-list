import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from 'usehooks-ts';
import { TasksList } from 'types/TasksList';
import { TaskListsIds } from 'types/TaskListsIds';
import { Task } from 'types/Task';
import { initialTasksListsState } from 'constants/initialTasksListsState';

export const useTasksLists = () => {
  const [tasksLists, setTasksLists] = useLocalStorage<TasksList[]>('tasksLists', initialTasksListsState);

  const firstTasksIsDoneSorter = (taskA: Task, taskB: Task) => {
    if (taskA.isDone === taskB.isDone) {
      return 0;
    }
    return taskB.isDone ? -1 : 1;
  };

  const addNewTask = (newTask: Task, taskListsId: TaskListsIds) => {
    const newTaskId = uuidv4();
    const newTasksLists = tasksLists.map((list) => {
      if (list.id !== taskListsId) {
        return list;
      }
      const newTasks = [...list.tasks, { ...newTask, id: newTaskId }];
      const newSortedTasks = newTasks.sort(firstTasksIsDoneSorter);
      return {
        ...list,
        tasks: newSortedTasks,
      };
    });
    setTasksLists(newTasksLists);
  };

  const fixDeadlineDateInTasksList = (taskList: TasksList) => {
    const newTasks = taskList.tasks.map((task) => {
      if (task.deadlineDate) {
        return {
          ...task,
          deadlineDate: new Date(task.deadlineDate),
        };
      }
      return task;
    });

    return {
      ...taskList,
      tasks: newTasks,
    };
  };

  const getTasksList = (taskListsId: TaskListsIds): TasksList | undefined => {
    const tasksList = tasksLists.find((list) => list.id === taskListsId);
    return tasksList && fixDeadlineDateInTasksList(tasksList);
  };

  const getAllTasksLists = (): TasksList[] => tasksLists.map((tasksList) => fixDeadlineDateInTasksList(tasksList));

  const changeTaskDoneStatus = (taskId: string, newIsDone: boolean) => {
    const newTasksList = tasksLists.map((list) => {
      const newTasks = list.tasks
        .map((task) => {
          if (task.id !== taskId) {
            return task;
          }
          return { ...task, isDone: newIsDone };
        })
        .sort(firstTasksIsDoneSorter);

      return {
        ...list,
        tasks: newTasks,
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
        const newTasksSorted = newTasks.sort(firstTasksIsDoneSorter);
        tasksListCopy.tasks = [...newTasksSorted];
      }
      return tasksListCopy;
    });

    setTasksLists(newTasksLists);
  };

  const removeTask = (taskId: string) => {
    const newTasksLists = tasksLists.map((list) => {
      const newTasks = list.tasks.filter((task) => task.id !== taskId);
      return {
        ...list,
        tasks: newTasks,
      };
    });
    setTasksLists(newTasksLists);
  };

  return { getAllTasksLists, getTasksList, addNewTask, changeTaskDoneStatus, findTask, changeTaskPosition, removeTask };
};
