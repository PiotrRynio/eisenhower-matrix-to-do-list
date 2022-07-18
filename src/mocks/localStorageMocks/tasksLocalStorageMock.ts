import { TaskLocalStorage } from 'types/TasksLocaleStorage';

export const tasksLocalStorageMock: Record<string, TaskLocalStorage> = {
  '9fa14265-4532-45a9-85ea-5d428d547870': { name: 'Make project', labels: ['programming'] },
  'ae779afb-d41f-4524-9c97-d9b5de7536e1': {
    name: 'Learn new programming things',
    labels: ['programming'],
  },
  '26b565a9-ca34-44d6-8c20-ae936f3af4a6': { name: 'Read book', labels: ['home'] },
  'd346cb75-f004-47a6-8629-4bff501bf0c3': { name: 'go shopping', labels: [] },
  '8239dcce-5a43-4655-8402-9401fb4bc0e4': { name: 'Play game', labels: ['home', 'freeTime'] },
  '9be229ed-9923-4373-b702-f03d879b568b': { name: 'Sleep', labels: ['home'] },
};
