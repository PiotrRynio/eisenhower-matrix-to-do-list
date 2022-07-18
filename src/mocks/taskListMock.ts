import { TasksList } from 'types/TasksList';

export const tasksListsMock: TasksList[] = [
  {
    id: 'URGENT_AND_IMPORTANT',
    title: 'Urgent & Important',
    tasks: [
      { id: '9fa14265-4532-45a9-85ea-5d428d547870', name: 'Make project', labels: ['company'] },
      { id: '2dc2fb5d-6dee-494d-843c-56b8ea2b2917', name: 'Hire Peter', labels: ['company'] },
      { id: 'ae779afb-d41f-4524-9c97-d9b5de7536e1', name: 'Learn new programming things', labels: ['programming'] },
    ],
  },
  {
    id: 'IMPORTANT_AND_NOT_URGENT',
    title: 'Important & not Urgent',
    tasks: [
      { id: '26b565a9-ca34-44d6-8c20-ae936f3af4a6', name: 'Read book', labels: ['home'] },
      { id: 'a7240c33-f16c-455c-b5b7-71b83604f811', name: 'Drink coffee ;)', labels: ['free time', 'programming'] },
    ],
  },
  {
    id: 'URGENT_AND_NOT_IMPORTANT',
    title: 'Urgent & not Important',
    tasks: [{ id: 'd346cb75-f004-47a6-8629-4bff501bf0c3', name: 'go shopping', labels: ['free time'] }],
  },
  {
    id: 'NOT_URGENT_AND_NOT_IMPORTANT',
    title: 'not Urgent & not Important',
    tasks: [
      { id: '8239dcce-5a43-4655-8402-9401fb4bc0e4', name: 'Play game', labels: ['home', 'free time'] },
      { id: '9be229ed-9923-4373-b702-f03d879b568b', name: 'Sleep', labels: ['home'] },
    ],
  },
];
