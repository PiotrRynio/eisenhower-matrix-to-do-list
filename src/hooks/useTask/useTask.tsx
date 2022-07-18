import { useLocalStorage } from 'usehooks-ts';
import { Task } from 'types/Task';

export const useTask = (tasksId: string) => {
  const [task] = useLocalStorage<Task | undefined>(tasksId, undefined);

  return { task };
};
