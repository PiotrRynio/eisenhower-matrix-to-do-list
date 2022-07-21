import { useLocalStorage } from 'usehooks-ts';
import { TasksLabels } from 'types/TasksLabels';
import { initialTasksLabelsState } from 'constants/initialTasksLabelsState';

export const useTaskLabel = () => {
  const [tasksLabels, setTasksLabels] = useLocalStorage<TasksLabels>('tasksLabels', initialTasksLabelsState);

  const addTaskLabel = (taskLabel: string) => {
    setTasksLabels([...tasksLabels, taskLabel]);
  };

  return { tasksLabels, addTaskLabel };
};
