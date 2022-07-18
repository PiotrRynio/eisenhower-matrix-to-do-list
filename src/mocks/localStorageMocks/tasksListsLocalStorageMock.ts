import { TaskListsIds } from 'types/TaskListsIds';
import { TasksIdsLocalStorage } from 'types/TasksListLocalStorage';

export const tasksListsLocalStorageMock: Record<TaskListsIds, TasksIdsLocalStorage> = {
  URGENT_AND_IMPORTANT: ['9fa14265-4532-45a9-85ea-5d428d547870', 'ae779afb-d41f-4524-9c97-d9b5de7536e1'],
  IMPORTANT_AND_NOT_URGENT: ['26b565a9-ca34-44d6-8c20-ae936f3af4a6'],
  URGENT_AND_NOT_IMPORTANT: ['d346cb75-f004-47a6-8629-4bff501bf0c3'],
  NOT_URGENT_AND_NOT_IMPORTANT: ['8239dcce-5a43-4655-8402-9401fb4bc0e4', '9be229ed-9923-4373-b702-f03d879b568b'],
};
