import { act, renderHook } from 'test-utils';
import { useTaskLabel } from './useTaskLabel';

describe('useTaskLabel', () => {
  const initialState = ['company', 'programming', 'home', 'free time'];

  it('should render correctly', () => {
    // when
    const { result } = renderHook(() => useTaskLabel());

    // then ;
    const { tasksLabels, addTaskLabel } = result.current;
    expect(tasksLabels).toBeTruthy();
    expect(addTaskLabel).toBeTruthy();
  });

  it('should return default', () => {
    // when
    const { result } = renderHook(() => useTaskLabel());
    const { tasksLabels } = result.current;

    // then ;
    expect(tasksLabels).toStrictEqual(initialState);
  });

  it('should add new label', async () => {
    // given
    const newLabel = 'new label';
    const expectedState = ['company', 'programming', 'home', 'free time', 'new label'];
    const { result } = renderHook(() => useTaskLabel());

    // when
    act(() => {
      result.current.addTaskLabel(newLabel);
    });

    // then ;
    expect(result.current.tasksLabels).toStrictEqual(expectedState);
  });
});
