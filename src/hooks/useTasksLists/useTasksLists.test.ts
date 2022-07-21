import { act, renderHook } from 'test-utils';
import { tasksListsWithTwoTaskMock } from 'mocks/tasksListsWithTwoTaskMock';
import { Task } from 'types/Task';
import { TasksList } from 'types/TasksList';
import { useTasksLists } from './useTasksLists';

jest.mock('uuid', () => {
  return {
    v4: () => 'test-uuid',
  };
});

describe('useTasksLists', () => {
  beforeEach(() => {
    window.localStorage.setItem('tasksLists', JSON.stringify(tasksListsWithTwoTaskMock));
  });

  it('should render correctly', () => {
    // when
    const { result } = renderHook(() => useTasksLists());

    // then ;
    const { getTasksList, addNewTask, changeTaskDoneStatus, findTask, changeTaskPosition, removeTask } = result.current;
    expect(getTasksList).toBeTruthy();
    expect(addNewTask).toBeTruthy();
    expect(changeTaskDoneStatus).toBeTruthy();
    expect(findTask).toBeTruthy();
    expect(changeTaskPosition).toBeTruthy();
    expect(removeTask).toBeTruthy();
  });

  it('should return correct, if we ask about all tasks lists', async () => {
    // given
    const { result } = renderHook(() => useTasksLists());

    // when
    const { getAllTasksLists } = result.current;
    const tasksLists = getAllTasksLists();

    // then
    expect(tasksLists).toStrictEqual(tasksListsWithTwoTaskMock);
  });

  it('should return correct, if we ask about one tasks list', async () => {
    // given
    const { result } = renderHook(() => useTasksLists());

    // when
    const { getTasksList } = result.current;
    const tasksList = getTasksList('URGENT_AND_IMPORTANT')();

    // then
    expect(tasksList).toStrictEqual(tasksListsWithTwoTaskMock[0]);
  });

  it('should add new task correctly', async () => {
    // given
    const { result } = renderHook(() => useTasksLists());
    const newTask: Task = {
      id: 'test-uuid',
      name: 'new task',
      description: 'new task description',
      isDone: false,
      labels: [],
      deadlineDate: new Date('2022-07-18'),
    };
    const expectedTasksLists = JSON.parse(JSON.stringify(tasksListsWithTwoTaskMock)) as TasksList[];
    expectedTasksLists[0].tasks.push(newTask);

    // when
    await act(async () => {
      await result.current.addNewTask(newTask, 'URGENT_AND_IMPORTANT');
    });

    // then
    expect(window.localStorage.getItem('tasksLists')).toStrictEqual(JSON.stringify(expectedTasksLists));
  });
});
