import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import { theme } from 'assets/styles/themes/primaryTheme';
import { initialTasksLabelsState } from 'constants/initialTasksLabelsState';
import { CreateNewTaskPopup } from './CreateNewTaskPopup';
import { emptyTasksListsMock } from '../../mocks/emptyTasksListsMock';
jest.mock('uuid', () => {
  return {
    v4: () => 'test-uuid',
  };
});

describe(`<CreateNewTaskPopup>`, () => {
  it('renders correctly', async () => {
    //given
    const mockCallback = jest.fn();
    const primaryColor = theme.colors.primary;

    // when
    render(<CreateNewTaskPopup onClose={mockCallback} />);

    // then
    screen.getByPlaceholderText(/Task name.../i);
    screen.getByPlaceholderText(/Description.../i);
    initialTasksLabelsState.forEach((label) => {
      screen.getByRole('button', { name: label });
    });
    screen.getByRole('button', { name: /add label/i });
    screen.getByPlaceholderText(/Add label.../i);
    screen.getByLabelText(/Priority/i);
    screen.getByText(/Urgent & not Important/i);
    screen.getByLabelText(/Deadline/i);
    screen.getByPlaceholderText('rrrr/mm/dd (optional)');
    screen.getByRole('button', { name: /Cancel/i });
    const addTaskButton = screen.getByRole('button', { name: /Add task/i });
    expect(addTaskButton).toHaveStyle({
      backgroundColor: primaryColor,
    });
  });

  it('calls callback with "false", if "Cancel" button will be clicked', async () => {
    //given
    const user = userEvent.setup();
    const mockCallback = jest.fn();
    render(<CreateNewTaskPopup onClose={mockCallback} />);

    // when
    const button = screen.getByRole('button', { name: /Cancel/i });
    await user.click(button);

    // then
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(false);
  });

  it('show hint and does not call callback, if "Add task" button will be clicked without filling the input', async () => {
    //given
    const user = userEvent.setup();
    const mockCallback = jest.fn();
    render(<CreateNewTaskPopup onClose={mockCallback} />);

    // when
    const button = screen.getByRole('button', { name: /Add task/i });
    await user.click(button);

    // then
    const hint = screen.getByText(/(required)/i);
    expect(hint).toBeInTheDocument();
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('create correct task', async () => {
    //given
    window.localStorage.setItem('tasksLists', JSON.stringify(emptyTasksListsMock));

    const expectedTasksLists = JSON.parse(JSON.stringify(emptyTasksListsMock));
    expectedTasksLists[3].tasks.push({
      id: 'test-uuid',
      name: 'example task name',
      labels: [],
      description: 'example task description',
    });

    const user = userEvent.setup();
    const mockCallback = jest.fn();
    render(<CreateNewTaskPopup onClose={mockCallback} />);

    // when
    const taskName = screen.getByPlaceholderText(/Task name.../i);
    await user.type(taskName, 'example task name');
    const description = screen.getByPlaceholderText(/Description.../i);
    await user.type(description, 'example task description');
    const button = screen.getByRole('button', { name: /Add task/i });
    await user.click(button);

    // then
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(true);
    const receivedTasksListsFromLocalStorage = JSON.parse(window.localStorage.getItem('tasksLists') || '');
    expect(receivedTasksListsFromLocalStorage).toEqual(expectedTasksLists);
  });
});
