import { useLocalStorage } from 'usehooks-ts';
import { TasksIdsLocalStorage } from 'types/TasksListLocalStorage';
import { TaskListsIds } from 'types/TaskListsIds';

type UseTasksList = {
  tasksListIds: TasksIdsLocalStorage;
};

export const useTasksList = (tasksListId: TaskListsIds): UseTasksList => {
  const [tasksListIds] = useLocalStorage<TasksIdsLocalStorage>(tasksListId, []);

  return { tasksListIds };
};
