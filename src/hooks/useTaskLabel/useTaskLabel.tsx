import { useLocalStorage } from 'usehooks-ts';
import { TasksLabels } from 'types/TasksLabels';
import { taskLabelsMock } from 'mocks/taskLabelsMock';

export const useTaskLabel = () => {
  const [tasksLabels, setTasksLabels] = useLocalStorage<TasksLabels>('tasksLabels', taskLabelsMock);

  const addTaskLabel = (taskLabel: string) => {
    setTasksLabels([...tasksLabels, taskLabel]);
  };

  return { tasksLabels, addTaskLabel };
};
