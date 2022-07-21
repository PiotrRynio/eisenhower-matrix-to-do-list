import { TasksList } from 'types/TasksList';

export const tasksListsWithTwoTaskMock: TasksList[] = [
  {
    id: 'URGENT_AND_IMPORTANT',
    title: 'Urgent & Important',
    tasks: [
      {
        id: '2dc2fb5d-6dee-494d-843c-56b8ea2b2917',
        name: 'Hire Peter',
        labels: ['company'],
        description: 'He is the best candidate',
        deadlineDate: new Date('2022-07-18'),
        isDone: false,
      },
      {
        id: '731cd85d-a46c-41c4-bcea-f8793f553b5a',
        name: 'Call Peter',
        labels: [],
        description: '',
      },
    ],
  },
  {
    id: 'IMPORTANT_AND_NOT_URGENT',
    title: 'Important & not Urgent',
    tasks: [],
  },
  {
    id: 'URGENT_AND_NOT_IMPORTANT',
    title: 'Urgent & not Important',
    tasks: [],
  },
  {
    id: 'NOT_URGENT_AND_NOT_IMPORTANT',
    title: 'not Urgent & not Important',
    tasks: [],
  },
];
