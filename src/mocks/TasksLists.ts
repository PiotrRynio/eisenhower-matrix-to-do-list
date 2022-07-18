import { TasksList } from '../types/TasksList';

export const tasksLists: TasksList[] = [
  {
    id: 'f87431a1-b096-48ed-9547-929085702865',
    title: 'Urgent & Important',
    tasks: [
      { id: '9fa14265-4532-45a9-85ea-5d428d547870', name: 'Make project', labels: ['programming'] },
      { id: 'ae779afb-d41f-4524-9c97-d9b5de7536e1', name: 'Learn new programming things', labels: ['programming'] },
    ],
  },
  {
    id: 'bc61b5a2-3a65-43b6-b5ec-484e2cf1360f',
    title: 'Important & not Urgent',
    tasks: [{ id: '26b565a9-ca34-44d6-8c20-ae936f3af4a6', name: 'Read book', labels: ['home'] }],
  },
  {
    id: 'bc61b5a2-3a65-43b6-b5ec-484e2cf1360f',
    title: 'Urgent & not Important',
    tasks: [{ id: 'd346cb75-f004-47a6-8629-4bff501bf0c3', name: 'go shopping', labels: [] }],
  },
  {
    id: 'f6d0f205-ae4a-48d2-b240-206a0ca3a3b6',
    title: 'not Urgent & not Important',
    tasks: [
      { id: '8239dcce-5a43-4655-8402-9401fb4bc0e4', name: 'Play game', labels: ['home', 'freeTime'] },
      { id: '9be229ed-9923-4373-b702-f03d879b568b', name: 'Sleep', labels: ['home'] },
    ],
  },
];
