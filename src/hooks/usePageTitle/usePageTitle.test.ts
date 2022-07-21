import { act, renderHook, waitFor } from 'test-utils';
import { usePageTitle } from './usePageTitle';

describe('usePageTitle', () => {
  it('should render correctly', () => {
    // when
    const { result } = renderHook(() => usePageTitle());

    // then ;
    const { pageTitle, setPageTitle } = result.current;
    expect(pageTitle).toBeTruthy();
    expect(setPageTitle).toBeTruthy();
  });

  it('should return default page title', async () => {
    // given
    const defaultTitle = 'Eisenhower List';

    // when
    const { result } = renderHook(() => usePageTitle());
    const { pageTitle } = result.current;

    // then
    expect(pageTitle).toBe(defaultTitle);
    await waitFor(() => expect(document.title).toEqual(defaultTitle));
  });

  it('should return custom page title', async () => {
    // given
    const customTitle = 'custom title';

    // when
    const { result } = renderHook(() => usePageTitle(customTitle));
    const { pageTitle } = result.current;

    // then
    expect(pageTitle).toBe(customTitle);
    await waitFor(() => expect(document.title).toEqual(customTitle));
  });

  it('should change page Title', async () => {
    // given
    const newTitle = 'New title';
    const { result } = renderHook(() => usePageTitle());

    // when
    act(() => {
      result.current.setPageTitle(newTitle);
    });

    // then
    expect(result.current.pageTitle).toBe(newTitle);
    await waitFor(() => expect(document.title).toEqual(newTitle));
  });
});
