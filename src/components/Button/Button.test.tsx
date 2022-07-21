import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import { theme } from 'assets/styles/themes/primaryTheme';
import { Button } from './Button';

describe(`<Button>`, () => {
  const buttonName = 'test button';

  it('renders button correctly', async () => {
    //given
    const mockCallback = jest.fn();

    // when
    render(<Button onClick={mockCallback}>{buttonName}</Button>);

    // then
    screen.getByRole('button', { name: /test button/i });
  });

  it('renders button with primary color', async () => {
    //given
    const mockCallback = jest.fn();
    const primaryColor = theme.colors.primary;

    // when
    render(
      <Button onClick={mockCallback} isPrimary>
        {buttonName}
      </Button>,
    );

    // then
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveStyle({
      backgroundColor: primaryColor,
    });
  });

  it('call callback, button is clicked', async () => {
    const user = userEvent.setup();
    //given
    const mockCallback = jest.fn();
    render(
      <Button onClick={mockCallback} isPrimary>
        {buttonName}
      </Button>,
    );
    const button = screen.getByRole('button', { name: /test button/i });

    // when
    await user.click(button);

    // then
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
